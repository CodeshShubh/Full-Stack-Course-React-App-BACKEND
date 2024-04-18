import express from "express";
import { getAllCourses} from "../controllers/courseController.js";

const router = express.Router();

  //Get All courses without lectures
router.route("/courses").get(getAllCourses);



export default router;
