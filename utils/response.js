const sendResponseError=(res,err)=>{
    let statusCode=err.statusCode;
    let message=err.message;
    
    return res.status(statusCode).json({
        message:message,
        status:false
    })
}


const sendResponse=(res,data,statusCode,message)=>{
    return res.status(statusCode).json({
        data:data,
        status:true,
        message:message
    })
}


module.exports={
    sendResponseError,
    sendResponse


};