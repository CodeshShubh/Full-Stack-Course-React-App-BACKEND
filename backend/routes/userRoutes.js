import express from "express";
import { addToPlaylist, changePassword, forgetPassword, getMyProfile, login, logout, register, removeFromPlaylist, resetPassword, updateProfile, updateprofilepicture } from "../controllers/userController.js";
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
router.route('/forgetpassword').post(forgetPassword);

//resetpassword
router.route('/resetpassword/:token').put(resetPassword);

//add to playlist
router.route('/addtoplaylist').post(isAuthenticated, addToPlaylist);

//remove from playlist
router.route('/removefromplaylist').delete(isAuthenticated, removeFromPlaylist);




export default router;
