import { Pool } from 'pg';
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
async function run() {
    const patterns = [
        '%83600%',
        '%PPSSMG020%',
        '%2221ECPCB530%',
        '%321ECPCB801%',
        '%ECPCB7002%',
        '%ELWHR070%',
        '%321ECPCB020R%',
        '%320MXCLA110%',
    ];
    for (const p of patterns) {
        const r = await pool.query('SELECT "materialCode", description FROM "Material" WHERE "materialCode" ILIKE $1', [p]);
        if (r.rows.length > 0) {
            console.log(`FOUND for ${p}:`, r.rows.map((x) => x.materialCode).join(', '));
        }
        else {
            console.log(`NOT FOUND: ${p}`);
        }
    }
    pool.end();
}
run().catch((e) => { console.error(e.message); pool.end(); });
//# sourceMappingURL=loose-check.js.map