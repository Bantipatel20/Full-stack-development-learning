

const mongoose= require("mongoose")
require("dotenv").config();
const dbconnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
    }).then(()=>{console.log("connect")})
    .catch((err)=>{console.log("erros")
         process.exit(1);
    })   
}

module.exports = dbconnect;