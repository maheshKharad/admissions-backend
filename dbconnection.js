import mongoose from "mongoose";
export const connection = async (URL) => {
   try{
    await mongoose.connect(URL)
    console.log("db connected successfully");
   }catch(error){
    console.log("getting error while conneting DB",error);
   } 
};