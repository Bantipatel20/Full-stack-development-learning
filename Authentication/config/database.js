

const mongoose = require("mongoose");

require("dotenv").config();

exports.connectdb = ()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{console.log("DB Connected")})
    .catch((err)=>{console.log("DB Connection error");
        process.exit(1);
    })
}