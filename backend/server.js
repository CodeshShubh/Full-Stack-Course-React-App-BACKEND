import app from "./app.js";
import { connectDB } from "./config/database.js";
import cloudinary from "cloudinary";
import Razorpay from "razorpay";
import nodeCron  from "node-cron";
import {Stats} from "./models/Stats.js"
connectDB();  

 
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

// for razarpay integration code form razporpay docs
export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});


// for sheduling the states using nodeCrone
nodeCron.schedule("0 0 0 1 * *",async()=>{
  try {
    await Stats.create({});
  } catch (error) {
    console.log(error);
  }
});


app.listen(process.env.PORT, ()=>{
    console.log(`server is working on port: ${process.env.PORT}`)
})