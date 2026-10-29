import { pool } from "../db.js";

export async function getAllHouses() {
    const result = await pool.query(`
        SELECT id, btrim(name) AS name, btrim(color1) AS color1,
               btrim(color2) AS color2, btrim(founder) AS founder
        FROM houses
    `);

    return result.rows;
}

export async function getHouseById (id) {
 const one = await pool.query("SELECT id, name, color, founder FROM houses WHERE id = $1", [id]);
  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}