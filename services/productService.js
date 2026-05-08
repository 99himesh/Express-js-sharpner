const path=require("path");

const readProductData=(res)=>{
   return res.sendFile(path.join(__dirname,"..","view","product.html"))
}
const productById=(res,id)=>{
   return res.send(`Fetching product with ID: ${id}`)
}

const addProduct=(req,res)=>{
      console.log(req.body);
      
    // return res.send("Adding a new product")
    return res.json({value:req.body.productName})
}


module.exports={
    readProductData,
    productById,
    addProduct
}