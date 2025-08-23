
const mongoose = require("mongoose");

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

module.exports = mongoose.model("fileschema",fileschema);