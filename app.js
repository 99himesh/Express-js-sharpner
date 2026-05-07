const express=require("express");
const app=express();
let port=4000

app.use((req,res,next)=>{
    console.log("Authenticate middleware called");
    next();
      
})

app.use("/library-2",(req,res,next)=>{
    console.log("Book recomondation");
    next()
})
app.use("/library-3",(req,res,next)=>{
    console.log("Research Paper");
    next()
})
app.use("/welcome",(req,res,next)=>{
    req.user="Guest"
    console.log("Welcome");
    next()
});



// dynamic route 
//params and query
//dynmic route should be at top of the route in bottom is not working
app.get("/running/:username",(req,res)=>{
    console.log(req.params,"fjvf v fv. vfdffv");
    console.log(req.query,"fjvf v fv. vfdffv");
    res.send(`User name is ${req.params.username} and role is ${req.query.role}`)
})




app.get("/library-2",(req,res)=>{
    res.send("<h1>Library 2 called</h1>")
})
app.get("/library-3",(req,res)=>{
    res.send("<h1>Library 3 called</h1>")
})
app.get("/Welcome",(req,res)=>{
    res.send(`<h1>Welcome ${req.user}</h1>`)
})


app.get("/orders",(req,res)=>{
    res.send("<h1>Here is the list of all orders.</h1>");
})

app.post("/orders",(req,res)=>{
    res.send("<h1>A new order has been created</h1>");
})

app.get("/users",(req,res)=>{
    res.send(`<h1>Here is the list of all users.</h1>`);
})

app.post("/users",(req,res)=>{
    res.send(`<h1>A new user has been added</h1>`);
})

app.get("/products",(req,res)=>{
    res.send("<h1>Here is the list of all products.</h1>");
})

app.post("/products",(req,res)=>{
    res.send("<h1>A new product has been added.</h1>");
})

app.get("/categories",(req,res)=>{
    res.send(`<h1>Here is the list of all categories.</h1>`);
})

app.post("/categories",(req,res)=>{
    res.send(`<h1>A new category has been created.</h1>`);
})

app.use((req,res)=>{
    res.status(404).send(`<h1>404 - Page Not Found.</h1>`);
})




app.listen(port,()=>{
    console.log(`Server running on ${port}`);
});


