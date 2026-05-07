const express=require("express");
const { students } = require("../data/studentsData");
const router=express.Router();

router.get("/",(req,res)=>{
        const data=students.map((item)=>item.name);
        if(data.length){
        res.status(200).send({status:200,message:"Students fetch successfully",Students:data})

        }else{
        res.status(404).send({status:404,message:"Students Not found"})

        }
   
})
router.get("/:id",(req,res)=>{
     const {id}=req.params;
     const data=students.filter((item)=>item.id==id);   
     if(data.length){
     res.status(200).send({status:200,message:"Student fetch successfully",Student:data[0]})

     } else{
     res.status(404).send({status:404,message:"Student Not found"})

     }
   
})

module.exports=router;