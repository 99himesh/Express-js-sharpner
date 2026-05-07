const express=require("express");
const {  courses } = require("../constants");
const router=express.Router();

router.get("/",(req,res)=>{
   try {
     const data=courses.map((item)=>item.name)
     if (data.length) {
     res.status(200).send({status:200,message:"Courses fetch successfully",data:data}) 
     }else{
     res.status(404).send({status:404,message:"Courses Not found"})
     }
   } catch (error) {
    console.log(error);
    
    
   }
})
router.get("/:id",(req,res)=>{
   try {
     const {id}=req.params;
     const data=courses.filter((item)=>item.id==id); 
     
     if(data.length){
     res.status(200).send({status:200,message:"Course fetch successfully",data:data[0]})
     }else{
     res.status(404).send({status:404,message:"Course NOt found"})

     }
   } catch (error) {
     console.log(error);
     
   }
})

module.exports=router;