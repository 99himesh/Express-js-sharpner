const express=require("express");
const router=express.Router();
const userController=require("../controllers/userCorntroller.js");


router.get("/",userController.getUser)
router.get("/:id",userController.getUserById)
router.post("/",userController.addNewUser)


module.exports=router;