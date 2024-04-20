import express from "express";
import { addLecture, createCourse, getAllCourses, getCourseLectures} from "../controllers/courseController.js";
import { get } from "mongoose";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

  //Get All courses without lectures
router.route("/courses").get(getAllCourses);

//Create new course - only admin
router.route("/createcourse").post(singleUpload, createCourse);


//Add lecturee
router.route("/course/:id").get(getCourseLectures).post(singleUpload,addLecture);

//Delete course , get courese details,

// delete lecture

export default router;
