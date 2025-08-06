

const express = require("express");
const router = express.Router();

const {login,signup} = require("../controllers/auth");
const {auth,isStudent,isAdmin} = require("../middlewares/auth")

router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected route of test"
    })
})
router.get("/student",auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected route of student"
    })
})
router.get("/admin",auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected route of admin"
    })
})

router.post("/login",login);
router.post("/signup",signup);

module.exports = router;