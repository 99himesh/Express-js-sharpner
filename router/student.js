const express=require("express");
const { students } = require("../constants");
const router=express.Router();

router.get("/",(req,res)=>{
    try {
        const data=students.map((item)=>item.name);
        if(data.length){
        res.status(200).send({status:200,message:"Students fetch successfully",Students:data})

        }else{
        res.status(404).send({status:404,message:"Students Not found"})

        }
    } catch (error) {
       console.log(error);
          
    }
})
router.get("/:id",(req,res)=>{
   try {
     const {id}=req.params;
     const data=students.filter((item)=>item.id==id);   
     if(data.length){
     res.status(200).send({status:200,message:"Student fetch successfully",Student:data[0]})

     } else{
     res.status(404).send({status:404,message:"Student Not found"})

     }
   } catch (error) {
    console.log(error);
    
   }
})

module.exports=router;