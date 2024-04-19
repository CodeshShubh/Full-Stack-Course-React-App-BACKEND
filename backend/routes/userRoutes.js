import express from "express";
import { login, logout, register } from "../controllers/userController.js";


const router = express.Router();

// to register a new User
router.route('/register').post(register);

//login
router.route('/login').post(login);

// logout
router.route('/logout').get(logout);



//getmyprofile


//change password
//updateprofile
// update profile picture



//forgetpassword
//resetpassword


//add to playlist
//remove from playlist



export default router;
