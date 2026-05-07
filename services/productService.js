const readProductData=(res)=>{
   return res.send("Fetching all  products")
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