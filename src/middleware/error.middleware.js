module.exports = (err,req,res,next)=>{
    const httpStatus = err.status || 500;
    return res.status(httpStatus).send({
        success:false,
        status:httpStatus,
        message:err.message || "Internal server error"
    });
}