
const File = require("../models/File");
const cloudinary = require("cloudinary").v2
exports.localFileUpload = async(req , res)=>{
    try{
        const file = req.files.file;
        console.log(file);
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        file.mv(path,(err)=>{
            console.log(err);
        })
        res.json({
            success:true,
            message:"Local file Uploaded Successfully "
        })
    }catch(err){    
        console.log(err);
    }
}

function issupportestypes(filetype,supportedTypes){
    return supportedTypes.includes(filetype);
}

async function uploadfiletocloudinary(file,folder) {
    const option = {folder}
    option.resource_type="auto"
   return await cloudinary.uploader.upload(file.tempFilePath,option);
}
exports.imageUpload = async(req,res)=>{
    try{
        const {name,tags,email}=req.body;
        const file = req.files.imagefile;
        console.log(name,tags,email);
        console.log(file);
        const supportedTypes = ["jpg","jpeg","png"];
        const filetype = file.name.split(".")[1].toLowerCase();
        if(!issupportestypes(filetype,supportedTypes)){
            res.status(400).json({
                success:false,
                message:"File type is not supported"
            })
        }

        const response = await uploadfiletocloudinary(file,"demo");
        console.log(response);

        const filedata = await File.create({name,tags,email,imageUrl:response.secure_url});
        
        res.json({
            success:true,
            imageUrl:response.secure_url, 
            message:"image succesfully uploaded in cloudinary"
        })
    }catch(err){
        console.log(err);
        res.status(400).json({
            success:false,
            message:"Error while upload image in cloudinary"
        })
    }
}


exports.videoUpload = async(req,res)=>{
    try{
        const {name,tags,email}=req.body;
        const file = req.files.videofile;
        console.log(name,tags,email);
        console.log(file);
        const supportedTypes = ["mp4","mov"];
        const filetype = file.name.split(".")[1].toLowerCase();
        if(!issupportestypes(filetype,supportedTypes)){
            res.status(400).json({
                success:false,
                message:"File type is not supported"
            })
        }
        const response = await uploadfiletocloudinary(file,"demo");
        console.log(response);

        const filedata = await File.create({name,tags,email,imageUrl:response.secure_url});
        
        res.json({
            success:true,
            imageUrl:response.secure_url, 
            message:"video succesfully uploaded in cloudinary"
        })
    }catch(err){
        console.log(err);
        res.status(400).json({
            success:false,
            message:"Error while upload video in cloudinary"
        })
    }
}

exports.imageSizeReducer = async(req,res)=>{
     try{
        const {name,tags,email}=req.body;
        const file = req.files.imagefile;
        console.log(name,tags,email);
        console.log(file);
        const supportedTypes = ["jpg","jpeg","png"];
        const filetype = file.name.split(".")[1].toLowerCase();
        if(!issupportestypes(filetype,supportedTypes)){
            res.status(400).json({
                success:false,
                message:"File type is not supported"
            })
        }

        const response = await uploadfiletocloudinary(file,"demo");
        console.log(response);

        const filedata = await File.create({name,tags,email,imageUrl:response.secure_url});
        
        res.json({
            success:true,
            imageUrl:response.secure_url, 
            message:"image succesfully uploaded in cloudinary"
        })
    }catch(err){
        console.log(err);
        res.status(400).json({
            success:false,
            message:"Error while upload image in cloudinary"
        })
    }

}