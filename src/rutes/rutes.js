import { Router } from "express";
import { apikeysBd } from "../../conexionBd.js";


const rutes = Router()



rutes.post("/api/removebg", upload.single("image_file"),async (req,res)=>{

    

    console.log("body api remove",req.body)
    console.log("file ", req.file)

    res.end("remove success")
})