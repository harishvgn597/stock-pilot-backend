import { Pool } from 'pg';
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const CODES = [
    '000008903287080012', '000008903287080029', '000008903287080067', '000008903287080074',
    '000008903287080098', '000008903287130076', '000008903287080173', '000008903287080326',
    '000008903287080333', '000008903287080548', '000008903287080562', '000008903287080579',
    '000008903287080692', '000008903287080784', '000008903287090202', '000008903287080852',
    'SR920ACAQU020',
];
async function run() {
    const userRes = await pool.query('SELECT id, name FROM "User" WHERE email = $1', ['ifb.lakshmienterprises@gmail.com']);
    if (userRes.rows.length === 0) {
        console.error('User not found!');
        process.exit(1);
    }
    const { id: franchiseeId, name } = userRes.rows[0];
    console.log(`Found user: ${name} (${franchiseeId})`);
    const matRes = await pool.query('SELECT "materialCode" FROM "Material" WHERE "materialCode" = ANY($1)', [CODES]);
    const found = matRes.rows.map((r) => r.materialCode);
    const missing = CODES.filter((c) => !found.includes(c));
    if (missing.length > 0) {
        console.warn('WARNING — these material codes are NOT in the Material table and will be skipped:', missing);
    }
    const items = [
        { code: '000008903287080012', desc: 'ULTRA TROLLEY WM (7KG)', group: 'Acc', qty: 7, unitPrice: 1449.15, totalAmount: 11969.93, cgst: 649.74, sgst: 649.74 },
        { code: '000008903287080029', desc: 'ULTRA TROLLEY WM (6KG)', group: 'Acc', qty: 14, unitPrice: 1406.78, totalAmount: 23240.00, cgst: 1299.48, sgst: 1299.48 },
        { code: '000008903287080067', desc: 'DUST COVER ULTRA WM (7KG)', group: 'Acc', qty: 10, unitPrice: 529.66, totalAmount: 6250.00, cgst: 405.00, sgst: 405.00 },
        { code: '000008903287080074', desc: 'DUST COVER ULTRA WM (6KG)', group: 'Acc', qty: 12, unitPrice: 529.66, totalAmount: 7500.00, cgst: 486.00, sgst: 486.00 },
        { code: '000008903287080098', desc: 'Cover TLM 8.5 & 9 KG', group: 'Acc', qty: 10, unitPrice: 652.54, totalAmount: 7700.00, cgst: 519.40, sgst: 519.40 },
        { code: '000008903287130076', desc: 'ULTRA TROLLEY WM (9KG)', group: 'Acc', qty: 6, unitPrice: 1483.05, totalAmount: 10500.00, cgst: 115.80, sgst: 115.80 },
        { code: '000008903287080173', desc: 'AQUA APPLIANCE (BIG) - CARTRIDGE', group: 'Acc', qty: 250, unitPrice: 96.61, totalAmount: 28499.97, cgst: 2172.50, sgst: 2172.50 },
        { code: '000008903287080326', desc: 'MICROCLEAN 250 ML PACK', group: 'Ess', qty: 25, unitPrice: 127.12, totalAmount: 3750.00, cgst: 265.00, sgst: 265.00 },
        { code: '000008903287080333', desc: 'FLUFF LIQUID DETERGENT FL', group: 'Ess', qty: 150, unitPrice: 260.17, totalAmount: 46050.00, cgst: 3271.50, sgst: 3271.50 },
        { code: '000008903287080548', desc: 'DESCALE', group: 'Ess', qty: 500, unitPrice: 128.81, totalAmount: 75995.00, cgst: 4920.00, sgst: 4920.00 },
        { code: '000008903287080562', desc: 'FABO STAIN REMOVER 100 ML SPRAY', group: 'Ess', qty: 40, unitPrice: 128.81, totalAmount: 6079.60, cgst: 604.00, sgst: 604.00 },
        { code: '000008903287080579', desc: 'LIMO', group: 'Ess', qty: 10, unitPrice: 107.63, totalAmount: 1270.00, cgst: 88.50, sgst: 88.50 },
        { code: '000008903287080692', desc: 'FLUFF LIQUID DETERGENT (TL)', group: 'Ess', qty: 50, unitPrice: 238.14, totalAmount: 15600.00, cgst: 1071.50, sgst: 1071.50 },
        { code: '000008903287080784', desc: 'Liquid Protecta', group: 'Ess', qty: 40, unitPrice: 184.75, totalAmount: 8720.00, cgst: 582.80, sgst: 582.80 },
        { code: '000008903287090202', desc: 'STABILIZER, IVS 1804 A,165 V-270 V,12 A', group: 'Acc', qty: 10, unitPrice: 1822.00, totalAmount: 21499.60, cgst: 1388.90, sgst: 1388.90 },
        { code: '000008903287080852', desc: 'VOLTAGE STABILIZER DIGITAL 4KVA 150~305', group: 'Acc', qty: 1, unitPrice: 2627.12, totalAmount: 3100.00, cgst: 200.82, sgst: 200.82 },
        { code: 'SR920ACAQU020', desc: 'Aqua Appliances (Big)', group: 'Acc', qty: 40, unitPrice: 1460.17, totalAmount: 68920.00, cgst: 5256.80, sgst: 5256.80 },
    ];
    const spareTypeMap = { Acc: 'Accessory', Ess: 'Additive' };
    let inserted = 0;
    let skipped = 0;
    for (const item of items) {
        if (!found.includes(item.code)) {
            console.log(`  SKIP (no material): ${item.code}`);
            skipped++;
            continue;
        }
        await pool.query(`INSERT INTO "GodownStock"
        (id, "franchiseeId", "materialCode", description, uom, "goodQuantity", "defectiveQuantity", "unitPrice", "totalAmount", cgst, sgst, "spareType", "invoiceId", notes, "createdAt", "updatedAt")
       VALUES
        (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, NULL, NULL, NOW(), NOW())`, [
            franchiseeId,
            item.code,
            item.desc,
            'Nos',
            item.qty,
            0,
            item.unitPrice,
            item.totalAmount,
            item.cgst,
            item.sgst,
            spareTypeMap[item.group],
        ]);
        console.log(`  OK: ${item.code} — ${item.desc} (qty ${item.qty})`);
        inserted++;
    }
    console.log(`\nDone. Inserted: ${inserted}, Skipped: ${skipped}`);
    pool.end();
}
run().catch((e) => { console.error(e.message); pool.end(); process.exit(1); });
//# sourceMappingURL=seed-godown.js.map