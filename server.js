import express from "express";
//const pool = require("./db");
import { pool } from "./db.js";
const app = express();
const port = 3000;

import housesRouter from "./routes/houses.router.js";
import teachersRouter from "./routes/teachers.router.js";
import studentsRouter from "./routes/students.router.js";
import coursesRouter from "./routes/courses.router.js";

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // parse JSON bodies

//HOUSES
app.use("/houses/", housesRouter);

//TEACHERS
app.use("/teachers/", teachersRouter);

//STUDENTS
app.use("/students/", studentsRouter);

//COURSES
app.use("/courses/", coursesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
