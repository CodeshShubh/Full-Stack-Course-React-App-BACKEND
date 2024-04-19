import express from "express";
import { register } from "../controllers/userController.js";


const router = express.Router();

// to register a new User
router.route('/register').post(register);

//login
// logout
//getmyprofile


//change password
//updateprofile
// update profile picture



//forgetpassword
//resetpassword


//add to playlist
//remove from playlist



export default router;
