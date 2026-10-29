import * as coursesRepository from "../repositories/courses.repository.js";
export async function getAllCourses(req, res) {
  try {
    const allHouses = await coursesRepository.getAllCourses();
    res.json(allCourses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error", code: error.code });
  }
}

// export async function getHousesById(req, res) {
//   try {
//     const id = req.params.id;
//     const house = await housesRepository.getHousesById(id);

//     if (house) {
//       res.status(200).json(house);
//     } else {
//       res.sendStatus(404);
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Database error" });
//   }
// }
