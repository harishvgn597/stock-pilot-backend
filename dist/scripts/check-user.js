import { Pool } from 'pg';
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
async function run() {
    const r = await pool.query('SELECT id, name, email FROM "User" WHERE email = $1', ['pprrabhupatelmani@gmail.com']);
    console.log(r.rows.length ? JSON.stringify(r.rows[0]) : 'NOT FOUND');
    pool.end();
}
run().catch((e) => { console.error(e.message); pool.end(); });
//# sourceMappingURL=check-user.js.map