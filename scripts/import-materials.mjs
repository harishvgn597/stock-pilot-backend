import 'dotenv/config';
import XLSX from 'xlsx';
import pg from 'pg';

const { Client } = pg;

const client = new Client({
  connectionString: process.env.DIRECT_URL,
});

function excelDateToISO(serial) {
  if (!serial || serial > 2900000) {
    // Treat very large values as far-future date
    return '9999-12-31T00:00:00.000Z';
  }
  const utcDays = Math.floor(serial - 25569);
  const date = new Date(utcDays * 86400000);
  return date.toISOString();
}

async function main() {
  await client.connect();
  console.log('Connected to database');

  const wb = XLSX.readFile('MRP-FEB-2026.csv');
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(sheet);
  console.log(`Read ${rows.length} rows from Excel`);

  const BATCH_SIZE = 500;
  let materialCount = 0;
  let priceCount = 0;

  for (let i = 0; i < rows.length; i += BATCH_SIZE) {
    const batch = rows.slice(i, i + BATCH_SIZE);

    // Build batch INSERT for materials
    const materialValues = [];
    const materialParams = [];
    let paramIdx = 1;

    for (const row of batch) {
      materialValues.push(`($${paramIdx++}, $${paramIdx++}, $${paramIdx++}, $${paramIdx++})`);
      materialParams.push(
        crypto.randomUUID(),
        row['Material'],
        row['Material Desc.'] || '',
        row['Material Grp.'] || ''
      );
    }

    const materialSql = `
      INSERT INTO "Material" (id, "materialCode", description, "materialGroup")
      VALUES ${materialValues.join(', ')}
      ON CONFLICT ("materialCode") DO NOTHING
      RETURNING id, "materialCode"
    `;

    const materialResult = await client.query(materialSql, materialParams);
    materialCount += materialResult.rowCount;

    // Get material IDs for this batch (including already existing ones)
    const codes = batch.map(r => r['Material']);
    const lookupResult = await client.query(
      `SELECT id, "materialCode" FROM "Material" WHERE "materialCode" = ANY($1)`,
      [codes]
    );
    const codeToId = {};
    for (const r of lookupResult.rows) {
      codeToId[r.materialCode] = r.id;
    }

    // Build batch INSERT for prices
    const priceValues = [];
    const priceParams = [];
    let pIdx = 1;

    for (const row of batch) {
      const matId = codeToId[row['Material']];
      if (!matId) continue;

      priceValues.push(
        `($${pIdx++}, $${pIdx++}, $${pIdx++}, $${pIdx++}, $${pIdx++}, $${pIdx++}, $${pIdx++})`
      );
      priceParams.push(
        crypto.randomUUID(),
        row['Cond.Rec.'] || '',
        row['Cond.Type'] || '',
        row['Rate'] || 0,
        excelDateToISO(row['Valid from']),
        excelDateToISO(row['Valid to']),
        matId
      );
    }

    if (priceValues.length > 0) {
      const priceSql = `
        INSERT INTO "MaterialPrice" (id, "conditionRecord", "conditionType", rate, "validFrom", "validTo", "materialId")
        VALUES ${priceValues.join(', ')}
      `;
      const priceResult = await client.query(priceSql, priceParams);
      priceCount += priceResult.rowCount;
    }

    const progress = Math.min(i + BATCH_SIZE, rows.length);
    process.stdout.write(`\rProcessed ${progress}/${rows.length} rows (Materials: ${materialCount}, Prices: ${priceCount})`);
  }

  console.log('\n\nDone!');
  console.log(`Total Materials inserted: ${materialCount}`);
  console.log(`Total Prices inserted: ${priceCount}`);

  // Verify counts
  const mCount = await client.query('SELECT COUNT(*) FROM "Material"');
  const pCount = await client.query('SELECT COUNT(*) FROM "MaterialPrice"');
  console.log(`\nDB verification:`);
  console.log(`  Material rows: ${mCount.rows[0].count}`);
  console.log(`  MaterialPrice rows: ${pCount.rows[0].count}`);

  await client.end();
}

main().catch(err => {
  console.error('Error:', err);
  client.end();
  process.exit(1);
});
