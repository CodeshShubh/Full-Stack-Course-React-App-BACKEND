import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";
import cookieParser from "cookie-parser";




config({
    path:"./config/config.env",
});

const app = express();

// Using Middlewares
app.use(express.json());
app.use(
    express.urlencoded({
        extended:true,
    })
)
//cookieParser for parse cookie for (get my profile) route
app.use(cookieParser());

// Importing & Using Routes
import course from "./routes/courseRoutes.js";
import user from "./routes/userRoutes.js";

app.use("/api/v1",course)
app.use("/api/v1",user)


export default app;

app.use(ErrorMiddleware)