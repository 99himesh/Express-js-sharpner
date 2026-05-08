const path=require("path");

const readProductData=(res)=>{
   return res.sendFile(path.join(__dirname,"..","view","product.html"))
}
const productById=(res,id)=>{
   return res.send(`Fetching product with ID: ${id}`)
}

const addProduct=(res)=>{
    return res.send("Adding a new product")
}


module.exports={
    readProductData,
    productById,
    addProduct
}