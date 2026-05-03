import { Pool } from 'pg';
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const MISSING = [
    { materialCode: '000008903287083600', description: 'FLUFF LIQUID DETERGENT (FL) - Refill 1L Pack', materialGroup: 'Ess' },
    { materialCode: '000008903287040269', description: 'DUST COVER ULTRA WM (9KG)', materialGroup: 'Acc' },
    { materialCode: 'DV911PPSSMG020', description: 'SUMP GR PCV IPSZ/FT/DIV-TURB SENSOR', materialGroup: 'Spare' },
    { materialCode: 'TL2221ECPCB530R', description: 'POWR BOARD ASSM NS- 8', materialGroup: 'Spare' },
    { materialCode: 'TL321ECPCB801', description: 'SUB ASM TL NEO IND IB 8KG(2WAY)', materialGroup: 'Spare' },
    { materialCode: 'UF221ECPCB7002', description: 'E_ADISPLAY PBC NEO SERIES', materialGroup: 'Spare' },
    { materialCode: 'UF221ELWHR070', description: 'WIRE HARNESS', materialGroup: 'Spare' },
    { materialCode: 'UF321ECPCB020R', description: 'CNTRL ASSLY DIVA AQUA SX (ZUNCH) STEAM 7010', materialGroup: 'Spare' },
];
async function run() {
    const grpRes = await pool.query('SELECT DISTINCT "materialGroup" FROM "Material" ORDER BY 1');
    console.log('Existing materialGroups:', grpRes.rows.map((r) => r.materialGroup).join(', '));
    let inserted = 0;
    let skipped = 0;
    for (const item of MISSING) {
        const exists = await pool.query('SELECT 1 FROM "Material" WHERE "materialCode" = $1', [item.materialCode]);
        if (exists.rows.length > 0) {
            console.log(`  SKIP (exists): ${item.materialCode}`);
            skipped++;
            continue;
        }
        await pool.query(`INSERT INTO "Material" (id, "materialCode", description, "materialGroup", "createdAt")
       VALUES (gen_random_uuid(), $1, $2, $3, NOW())`, [item.materialCode, item.description, item.materialGroup]);
        console.log(`  OK: ${item.materialCode} — ${item.description}`);
        inserted++;
    }
    console.log(`\nDone. Inserted: ${inserted}, Skipped: ${skipped}`);
    pool.end();
}
run().catch((e) => { console.error(e.message); pool.end(); process.exit(1); });
//# sourceMappingURL=add-missing-materials.js.map