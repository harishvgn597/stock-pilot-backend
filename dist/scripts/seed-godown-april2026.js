import { Pool } from 'pg';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MISSING_CODES = new Set();
const SPARE_TYPE_MAP = {
    Accessory: 'Accessory',
    Essentials: 'Additive',
    'SPARES ': 'Spare',
    SPARES: 'Spare',
};
function isNumericCode(code) {
    return /^\d+$/.test(code);
}
function toMaterialCode(raw) {
    return isNumericCode(raw) ? '00000' + raw : raw;
}
async function run() {
    const userRes = await pool.query('SELECT id, name FROM "User" WHERE email = $1', ['pprrabhupatelmani@gmail.com']);
    if (userRes.rows.length === 0) {
        console.error('User not found!');
        process.exit(1);
    }
    const { id: franchiseeId, name } = userRes.rows[0];
    console.log(`Franchisee: ${name} (${franchiseeId})`);
    const txt = fs.readFileSync(path.join(__dirname, '../test.txt'), 'utf8');
    const lines = txt.trim().split('\n').slice(1);
    let inserted = 0;
    let skipped = 0;
    for (const line of lines) {
        const parts = line.split('\t');
        const category = parts[0]?.trim();
        const rawCode = parts[1]?.trim();
        const partName = parts[2]?.trim();
        const rawQty = parts[3]?.trim();
        const rawMrp = parts[4]?.trim();
        if (!rawCode || !partName)
            continue;
        const materialCode = toMaterialCode(rawCode);
        if (MISSING_CODES.has(materialCode)) {
            console.log(`  SKIP (not in Material): ${materialCode}`);
            skipped++;
            continue;
        }
        const qty = rawQty ? parseFloat(rawQty) : 0;
        const mrp = rawMrp ? parseFloat(rawMrp) : 0;
        const unitPrice = mrp > 0 ? parseFloat((mrp / 1.18).toFixed(2)) : 0;
        const cgst = mrp > 0 ? parseFloat((unitPrice * 0.09).toFixed(2)) : 0;
        const sgst = cgst;
        const totalAmount = parseFloat((qty * mrp).toFixed(2));
        const spareType = SPARE_TYPE_MAP[category] ?? null;
        try {
            await pool.query(`INSERT INTO "GodownStock"
          (id, "franchiseeId", "materialCode", description, uom,
           "goodQuantity", "defectiveQuantity", "unitPrice", "totalAmount",
           cgst, sgst, "spareType", "invoiceId", notes, "createdAt", "updatedAt")
         VALUES
          (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, NULL, NULL, NOW(), NOW())`, [
                franchiseeId,
                materialCode,
                partName,
                'Nos',
                qty,
                0,
                unitPrice,
                totalAmount,
                cgst,
                sgst,
                spareType,
            ]);
            console.log(`  OK: ${materialCode} — ${partName} (qty ${qty}, mrp ${mrp})`);
            inserted++;
        }
        catch (e) {
            if (e.code === '23503') {
                console.log(`  SKIP (FK miss): ${materialCode} — ${partName}`);
                skipped++;
            }
            else {
                throw e;
            }
        }
    }
    console.log(`\nDone. Inserted: ${inserted}, Skipped: ${skipped}`);
    pool.end();
}
run().catch((e) => { console.error(e.message); pool.end(); process.exit(1); });
//# sourceMappingURL=seed-godown-april2026.js.map