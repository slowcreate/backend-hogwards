import { pool } from "../db.js";

export async function getAllCourses() {
  const result = await pool.query(`
      SELECT * FROM courses
    `);

  return result.rows;
}

export async function getCourseById(id) {
  const one = await pool.query(
    "SELECT id, name, color, fk_teacher FROM teachers WHERE id = $1",
    [id],
  );
  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}
