
const Post = require("../models/PostModel");


exports.createpost = async(req,res)=>{
    try{
        const {title,body} = req.body;
        const post = new Post({title,body});
        const savepost = await post.save();
        res.json({
            post:savepost
        })
    }catch(err){
        console.log("Error while creating Post");
        console.log(err);
    }
}

exports.getallpost = async(req,res)=>{
    try{
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            post:posts
        })
    }catch(err){
        console.log("sare post nahii aa rahe he");
        console.log(err);
    }
}