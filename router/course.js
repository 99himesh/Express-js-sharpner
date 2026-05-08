const express=require("express");
const {  courses } = require("../data/studentsData");
const { sendResponseError, sendResponse } = require("../utils/response");
const router=express.Router();

router.get("/",(req,res)=>{
   try {
       const data=courses.map((item)=>item.name)
       if (!data.length) {
          let err=new Error("Courses Not found");
          err.statusCode=404          
          throw err;
       }  
       return sendResponse(res,data,200,"Data fetch successfully")
     
   } catch (error) {
     console.log(error,"gdghd");
     
      return sendResponseError(res,error)
   }
})
router.get("/:id",(req,res)=>{
     const {id}=req.params;
     const data=courses.filter((item)=>item.id==id); 
     
     if(!data.length){
     res.status(404).send({status:404,message:"Course NOt found"})

     }
     res.status(200).send({status:200,message:"Course fetch successfully",data:data[0]})

  
})

module.exports=router;