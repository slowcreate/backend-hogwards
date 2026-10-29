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
      res.status(200).json(newCourse);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
}
export async function deleteCourse(req, res) {
  try {
    const id = req.params.id;
    const delCourse = await coursesRepository.deleteCourse(id);

    if (delCourse) {
      res.sendStatus(200);
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
