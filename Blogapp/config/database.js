const mongoose = require("mongoose");
require("dotenv").config()
const connectwithdb = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(console.log("DB connected"))
    .catch((err)=>{
        console.log("Connection issues");
        console.log(err);
        process.exit(1);
    })
}

module.exports = connectwithdb;