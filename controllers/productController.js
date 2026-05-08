const productServices=require("../services/productService.js")
const getProduct=(req,res)=>{
    productServices.readProductData(res);
    
}
const getProductById=(req,res)=>{
    const {id}=req.params;
    productServices.productById(res,id)
}


const addNewProduct=(req,res)=>{
    productServices.addProduct(req,res)
}


module.exports={getProduct,getProductById,addNewProduct}