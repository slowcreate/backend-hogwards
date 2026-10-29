import { pool } from "../db.js";

export async function getAllCourses() {
  const result = await pool.query(`
      SELET * FROM courses
    `);

  return result.rows;
}

export async function getHouseById(id) {
  const one = await pool.query(
    "SELECT id, name, color, founder FROM houses WHERE id = $1",
    [id],
  );
  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}
