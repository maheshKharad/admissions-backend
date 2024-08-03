import express from "express";
import cors from "cors";
import { connection } from "./dbconnection.js";
import router from "./route/route.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
const app = express();
const PORT = 5000;

 // parse various different custom JSON types as JSON
 app.use(bodyParser.json());
 app.use(cors());
 // create application/json parser
 // var jsonParser = bodyParser.json()
 
 // create application/x-www-form-urlencoded parser
 app.use(bodyParser.urlencoded({ extended: false }))
 // parse some custom thing into a Buffer
 // app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
 const db_URL = "mongodb+srv://mkharad20:patil885@cluster0.hjrtmsn.mongodb.net/admission"
//   const db_URL = "mongodb+srv://mkharad20:patil885@cluster0.b1fch6p.mongodb.net/admition"
 connection(db_URL);
 app.use("/", router);
app.listen(PORT, () => {
    console.log("server is running at Port 5000");
}); 


