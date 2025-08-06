
const jwt = require("jsonwebtoken");
require("dotenv").config()

exports.auth = (req,res,next) =>{
    try{
        const token = req.body.token;
        if(!token){
            return res.status(401).json({
                success:false,
                message:"No token for validation"
            })
        }
        try{
            const decode = jwt.verify(token,process.env.JWT_SECRETKEY);
            console.log(decode)
            req.user=decode
        }catch(error){
            return res.status(401).json({
                success:false,
                message:"token invalid"
            })
        }
        next();
    }catch(error){
        return res.status(401).json({
            success:false,
            message:"Error While Varify the token"
        })
    }
}

exports.isStudent = (req,res,next)=>{
    try{
        if(req.user.role!=="Student"){
            return res.status(401).json({
                success:false,
                message:'This is protected route for the student'
            })
        }
        next();
    }catch(err){
        return res.status(500).json({
            success:false,
            message:'User role cannot be verify'
        })
    }
}
exports.isAdmin = (req,res,next)=>{
    try{
    if(req.user.role!=="Admin"){
            return res.status(401).json({
                success:false,
                message:'This is protected route for the Admin'
            })
        }
        next();
    }catch(err){
        return res.status(500).json({
            success:false,
            message:'Admin role cannot be verify'
        })
    }
}