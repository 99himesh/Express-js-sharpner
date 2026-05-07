const express=require("express");
const {  courses } = require("../data/studentsData");
const router=express.Router();

router.get("/",(req,res)=>{
     const data=courses.map((item)=>item.name)
     if (data.length) {
     res.status(200).send({status:200,message:"Courses fetch successfully",data:data}) 
     }else{
     res.status(404).send({status:404,message:"Courses Not found"})
     }
   
})
router.get("/:id",(req,res)=>{
     const {id}=req.params;
     const data=courses.filter((item)=>item.id==id); 
     
     if(data.length){
     res.status(200).send({status:200,message:"Course fetch successfully",data:data[0]})
     }else{
     res.status(404).send({status:404,message:"Course NOt found"})

     }
  
})

module.exports=router;