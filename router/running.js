const express=require("express");
const router=express.Router();


// dynamic route 
//params and query
//dynmic route should be at top of the route in bottom is not working
router.get("/",(req,res)=>{
    res.send(`<h1>Welcome ${req.user}</h1>`)
})

router.get("/:username",(req,res)=>{
    console.log(req.params,"fjvf v fv. vfdffv");
    console.log(req.query,"fjvf v fv. vfdffv");
    res.send(`User name is ${req.params.username} and role is ${req.query.role}`)
})



module.exports=router;