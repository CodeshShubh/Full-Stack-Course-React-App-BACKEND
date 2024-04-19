import express from "express";
import { getMyProfile, login, logout, register } from "../controllers/userController.js";
import {isAuthenticated} from '../middlewares/auth.js'

const router = express.Router();

// to register a new User
router.route('/register').post(register);

//login
router.route('/login').post(login);

// logout
router.route('/logout').get(logout);

//getmyprofile (this is acceable when user already login)
router.route('/me').get( isAuthenticated , getMyProfile);




//change password
//updateprofile
// update profile picture



//forgetpassword
//resetpassword


//add to playlist
//remove from playlist



export default router;
