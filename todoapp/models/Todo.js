

const mongoose = require('mongoose')

const todoschema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
        description:{
            type:String,
            required:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now,
        },
        updateAt:{
            type:Date,
            required:true,
            default:Date.now,
        }
    }
);

module.exports = mongoose.model("Todo",todoschema);