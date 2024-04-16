import { config } from "dotenv";
import app from "./app.js";

config({
    path:"./config/config.env",
});

app.listen(process.env.PORT, ()=>{
    console.log(`server is working on port: ${process.env.PORT}`)
})