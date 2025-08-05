

const User = require("../model/student")

exports.add = async(req,res)=>{
    try{
        const {name,email,mobile}  = req.body;
        const user = new User({name,email,mobile}).save();
        return res.status(200).json({
            success:true,
            message:"db inserted successfully"
        })
    }catch(err){
        console.log("Error while add student");
        return res.json({
            success:false,
            message:"Data not inserted"
        })
    }
}