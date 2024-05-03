import express from "express";


const postRoute= express.Router();

postRoute.get("/test",(req,res)=>{
    console.log("router works")
})

export default postRoute;