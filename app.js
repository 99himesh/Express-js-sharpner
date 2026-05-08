const express=require("express");
const app=express();
const orderRoute=require("./router/order.js")
const usersRoute=require("./router/users.js")
const productsRoute=require("./router/products.js")
const booksRoute=require("./router/books.js")
const categoryRoute=require("./router/category.js")
const runningRoute=require("./router/running.js")
const courseRoute=require("./router/course.js")
const studentRoute=require("./router/student.js")
const homeRoute=require("./router/home.js")
const userEcommerceRoute=require("./router/userRoute.js")
const productEcommerceRoute=require("./router/productRoute.js")
const cartEcommerceRoute=require("./router/cartRoute.js")
let port=4000


//middleWares
app.use(express.json())
// app.use((req,res,next)=>{
//     console.log(`The request method is ${req.method} and url is ${req.url}`);
//     next();
// })

// app.use((req,res,next)=>{
//     req.user="himesh"
//     next()
//  })
app.use(express.static('public'))

//routes
app.use("/",homeRoute)
app.use("/orders",orderRoute)
app.use("/users",usersRoute)
app.use("/products",productsRoute)
app.use("/books",booksRoute)
app.use("/categories",categoryRoute)
app.use("/running",runningRoute)
app.use("/course",courseRoute)
app.use("/student",studentRoute)
app.use("/user-ecommerce",userEcommerceRoute)
app.use("/product-ecommerce",productEcommerceRoute)
app.use("/cart-ecommerce",cartEcommerceRoute)
app.use((req,res)=>{
    res.status(404).send(`<h1>404 - Page Not Found.</h1>`);
})


app.listen(port,()=>{
    console.log(`Server running on ${port}`);
});


