const express=require("express");
const router=express.Router();
const productController=require("../controllers/productController.js")

router.get("/",productController.getProduct)
router.get("/:id",productController.getProductById)
router.post("/",productController.addNewProduct)


module.exports=router;