const express=require("express");
const router=express.Router();
const cartController=require("../controllers/cartConstroller.js")
router.get("/:userId",cartController.getCartByUserId)
router.post("/:userId",cartController.addCartByUserId)

module.exports=router;