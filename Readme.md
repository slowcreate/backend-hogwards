# Hogwarts Course Management System

## Endpoints

### Houses

| Method | Route       | Beskrivelse    |
| ------ | ----------- | -------------- |
| GET    | /houses     | get all houses |
| GET    | /houses/:id | get one house  |

### Teachers

| ------ | ------------- | ---------------- |
| GET | /teachers | get all teachers |
| GET | /teachers/:id | get one teacher |
| POST | /teachers | create teacher |
| PUT | /teachers/:id | update teacher |
| DELETE | /teachers/:id | delete teacher |

### Students

| ------ | ------------- | ---------------- |
| GET | /students | get all students |
| GET | /students/:id | get one student |
| POST | /students | create student |
| PUT | /students/:id | update student |
| DELETE | /students/:id | delete student |

### Courses

| GET | /courses | get all courses |
| GET | /courses/:id | get one course with teacher and students |
| POST | /courses | create course |
| PUT | /courses/:id | update course |
| DELETE | /courses/:id | delete course |
| PUT | /courses/:id/teacher | change teacher on course |
| POST | /courses/:id/students | add student to course |
| DELETE | /courses/:id/students/:studentId | remove student from course |

Testene er lavet i Bruno og ligger i mappen `hogwards-api-test`.
