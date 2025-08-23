

const mongoose = require("mongoose");
require("dotenv").config();


exports.connectiondb = ()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true
    })
    .then(()=>{console.log("DB connected successfully")})
    .catch((err)=>{console.log("Error While DB connection" + err);
        process.exit(1);
    })
}