const getUser=(req,res)=>{
    res.send("Fetching all users")
}

const getUserById=(req,res)=>{
    const {id}=req.params;
    res.send(`Fetching user with ID: ${id}`)
}
const addNewUser=(req,res)=>{
    res.send("Adding a new user")
}


module.exports={
    getUser,
    getUserById,
    addNewUser
}