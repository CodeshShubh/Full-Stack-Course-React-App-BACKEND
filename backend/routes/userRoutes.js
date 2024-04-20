import express from "express";
import { changePassword, getMyProfile, login, logout, register, updateProfile, updateprofilepicture } from "../controllers/userController.js";
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
router.route('/changepassword').put( isAuthenticated , changePassword);

//updateprofile
router.route('/updateprofile').put( isAuthenticated , updateProfile);

// update profile picture
router.route('/updateprofilepicture').put( isAuthenticated , updateprofilepicture);



//forgetpassword
//resetpassword


//add to playlist
//remove from playlist



export default router;
