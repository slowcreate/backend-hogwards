import * as coursesRepository from "../repositories/courses.repository.js";

export async function getAllCourses(req, res) {
  try {
    const allCourses = await coursesRepository.getAllCourses();
    res.json(allCourses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error", code: error.code });
  }
}

export async function getCoursesById(req, res) {
  try {
    const id = req.params.id;
    const course = await coursesRepository.getCoursesById(id);

    if (course) {
      res.status(200).json(course);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
}

export async function createCourse(req, res) {
  try {
    const newCourse = await coursesRepository.createCourse(req.body);

    if (newCourse) {
      res.status(201).json(newCourse); // ÆNDRET: 201 = Created
    } else {
      res.sendStatus(400); // ÆNDRET: 400 = Bad Request
    }
  } catch (err) {
    console.error(err);
    if (err.code === "23503") return res.sendStatus(404); // teacher findes ikke
    res.status(500).json({ error: "Database error" });
  }
}

export async function deleteCourse(req, res) {
  try {
    const id = req.params.id;
    const delCourse = await coursesRepository.deleteCourse(id);

    if (delCourse) {
      res.sendStatus(204); // ÆNDRET: 204 = No Content
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
}

export async function updateCourse(req, res) {
  const id = req.params.id;
  try {
    const updatedCourse = await coursesRepository.updateCourse(id, req.body);
    if (updatedCourse) {
      res.status(200).json(updatedCourse);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
}

// ---------- NYE: U change teacher / add student / remove student ----------

// PUT /courses/:id/teacher   body: { "teacherId": 2 }
export async function changeTeacher(req, res) {
  try {
    const id = req.params.id;
    const { teacherId } = req.body;
    if (!teacherId) return res.sendStatus(400);

    const course = await coursesRepository.changeTeacher(id, teacherId);
    if (course) {
      res.status(200).json(course);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    if (err.code === "23503") return res.sendStatus(404); // teacher findes ikke
    res.status(500).json({ error: "Database error" });
  }
}

// POST /courses/:id/students   body: { "studentId": 8 }
export async function addStudent(req, res) {
  try {
    const id = req.params.id;
    const { studentId } = req.body;
    if (!studentId) return res.sendStatus(400);

    const added = await coursesRepository.addStudentToCourse(id, studentId);
    res.status(201).json(added);
  } catch (err) {
    console.error(err);
    if (err.code === "23503") return res.sendStatus(404); // course eller student findes ikke
    if (err.code === "23505") return res.sendStatus(409); // allerede på kurset
    res.status(500).json({ error: "Database error" });
  }
}

// DELETE /courses/:id/students/:studentId
export async function removeStudent(req, res) {
  try {
    const { id, studentId } = req.params;
    const removed = await coursesRepository.removeStudentFromCourse(
      id,
      studentId,
    );

    if (removed) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
}
