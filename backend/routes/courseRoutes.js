import express from "express";
import { createCourse, getAllCourses} from "../controllers/courseController.js";

const router = express.Router();

  //Get All courses without lectures
router.route("/courses").get(getAllCourses);

//Create new course - only admin
router.route("/createcourse").post(createCourse);


//Add lecturee, Delete course , get courese details,

// delete lecture

export default router;
