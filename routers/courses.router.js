import express from "express";
import * as coursesController from "../controllers/courses.controller.js";
const coursesRouter = express.Router();
//read all courses
coursesRouter.get("/", coursesController.getAllCourses);
//read a singelcourses
coursesRouter.get("/:id", coursesController.getCoursesById);
//CREATE en Course
coursesRouter.post("/", coursesController.createCourse);
//DELETE en Course
coursesRouter.delete("/:id", coursesController.deleteCourse);
//UPDATE en Course
coursesRouter.put("/:id", coursesController.updateCourse);
export default coursesRouter;
