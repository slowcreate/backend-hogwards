import { pool } from "../db.js";

export async function getAllStudents() {
  const result = await pool.query("Select * from students");
  return result.rows;
}

export async function getStudentsById(id) {
  const one = await pool.query("SELECT id, name, house_id FROM students WHERE id = $1", [id]);
  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

export async function createStudent({ name, house_id, year }) {
  const result = await pool.query("INSERT into students (name, house_id, year) values ($1, $2, $3) returning id, name, house_id, year", [name, house_id, year]);
  if (result.rowCount === 0) {
    return null;
  } else {
    return result.rows[0];
  }
}

export async function deleteStudent(id) {
  const del = await pool.query("DELETE FROM students WHERE id = $1", [id]);
  return del.rowCount > 0;
}

export async function updateStudent(id, { name, house_id, year }) {
  const upd = await pool.query("UPDATE students SET name = $1, house_id = $2, year = $3 WHERE id = $4 RETURNING id, name, house_id, year", [name, house_id, year, id]);
  if (upd.rowCount === 0) {
    return null;
  } else {
    return upd.rows[0];
  }
}