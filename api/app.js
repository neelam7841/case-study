import express from "express";
import cookieParser from "cookie-parser";
import postRoute from "./route/post.route.js";
import authRoute from "./route/auth.route.js";

const app= express();
app.use(express.json())
app.use(cookieParser())
app.use("/api/post",postRoute)
app.use("/api/auth",authRoute)

app.listen(2000,()=>{
    console.log("server is running!!");

})