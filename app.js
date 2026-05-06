const express=require("express");
const app=express();
let port=3000

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
app.listen(port,()=>{
    console.log(`Server running on ${port}`);
    
});