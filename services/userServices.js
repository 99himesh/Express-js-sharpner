const { usersData } = require("../data/usersData");

const readingDatafromFile=()=>{
     let users=usersData;
     return users;
}


const sortingValueUsingParam=(req,users)=>{
     if(req.age){
        const age=req.age;        
        users=users.filter((item)=>item.age==age)
    }
    if(req.sortBy=="userName"){
        users.sort((a,b)=>a.userName.localeCompare(b.userName))
    }
    return users; 
}


module.exports={
    readingDatafromFile,
    sortingValueUsingParam
}