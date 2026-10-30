import { pool } from "../db.js";

export async function getAllCourses() {
  const result = await pool.query(`
      SELECT * FROM courses
    `);

  return result.rows;
}

export async function getCoursesById(id) {
  const one = await pool.query(
    `SELECT c.id, c.name, c.fk_teacher, t.name AS teacher_name
     FROM courses c
     LEFT JOIN teachers t ON t.id = c.fk_teacher
     WHERE c.id = $1`,
    [id],
  );
  if (one.rowCount === 0) {
    return null;
  } else {
    const course = one.rows[0];
    course.students = await getStudentsInCourse(id);
    return course;
  }
}

export async function getStudentsInCourse(courseId) {
  const result = await pool.query(
    `SELECT s.id, s.name, s.year, s.house_id
     FROM students s
     JOIN course_students cs ON cs.fk_student = s.id
     WHERE cs.fk_course = $1`,
    [courseId],
  );
  return result.rows;
}

export async function addStudentToCourse(courseId, studentId) {
  const result = await pool.query(
    "INSERT INTO course_students (fk_course, fk_student) VALUES ($1, $2) RETURNING *",
    [courseId, studentId],
  );
  return result.rows[0];
}

export async function removeStudentFromCourse(courseId, studentId) {
  const result = await pool.query(
    "DELETE FROM course_students WHERE fk_course = $1 AND fk_student = $2",
    [courseId, studentId],
  );
  return result.rowCount > 0;
}

export async function changeTeacher(courseId, teacherId) {
  const result = await pool.query(
    "UPDATE courses SET fk_teacher = $1 WHERE id = $2 RETURNING *",
    [teacherId, courseId],
  );
  return result.rows[0] ?? null;
}

export async function createCourse({ name, fk_teacher }) {
  const result = await pool.query(
    "INSERT INTO courses (name, fk_teacher) VALUES ($1, $2) RETURNING *",
    [name, fk_teacher],
  );
  return result.rows[0];
}

export async function updateCourse(id, { name, fk_teacher }) {
  const result = await pool.query(
    "UPDATE courses SET name = $1, fk_teacher = $2 WHERE id = $3 RETURNING *",
    [name, fk_teacher, id],
  );
  return result.rows[0] ?? null;
}

export async function deleteCourse(id) {
  const result = await pool.query("DELETE FROM courses WHERE id = $1", [id]);
  return result.rowCount > 0;
}
