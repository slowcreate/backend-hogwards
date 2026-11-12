import { pool } from "../db.js";

export async function getAllTeachers() {
  const result = await pool.query(/*sql*/ `SELECT t.id, t.name, h.name
                                          FROM teachers t
                                          LEFT JOIN houses h
                                          ON t.id = h.id`);
  return result.rows;
}

export async function getTeachersById(id) {
  const one = await pool.query(
    "SELECT id, name, house_id FROM teachers WHERE id = $1",
    [id],
  );
  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

export async function createTeacher({ name, house_id }) {
  const result = await pool.query(
    "INSERT into teachers (name, house_id) values ($1, $2) returning id, name, house_id",
    [name, house_id],
  );
  if (result.rowCount === 0) {
    return null;
  } else {
    return result.rows[0];
  }
}

export async function deleteTeacher(id) {
  const del = await pool.query("DELETE FROM teachers WHERE id = $1", [id]);
  return del.rowCount > 0;
}

export async function updateTeacher(id, { name, house_id }) {
  const upd = await pool.query(
    "UPDATE teachers SET name = $1, house_id = $2 WHERE id = $3 RETURNING id, name, house_id",
    [name.name, house_id, id],
  );

  if (result.rowCount === 0) return null;

  const updateId = result.rows[0].id;
  return getById(updateId);
}
