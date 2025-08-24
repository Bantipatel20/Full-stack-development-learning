
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config ()
const fileschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    tags:{
        type:String
    },
    email:{
        type:String
    }
})



fileschema.post("save",async function (doc) {
    try{
        console.log("DOC",doc);

        const transporter  = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            secure: true,
            port: Number(process.env.MAIL_PORT),
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            }
        })
        await transporter.verify(); // 🔹 Verify login before sending email
        console.log("✅ Mail server is ready");
        let info = await transporter.sendMail({
            from:process.env.MAIL_USER,
            to:doc.email,
            subject:"New File Uploaded On cloundinary",
            html:"<h1>Helloo jee</h1>"
        })
        console.log(info)
    }catch(err){
        console.log(err);
    }
    
})
module.exports = mongoose.model("fileschema",fileschema);