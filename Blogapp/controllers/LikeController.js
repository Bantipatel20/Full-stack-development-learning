
const Post = require("../models/PostModel");
const Like = require("../models/LikeModel");

exports.likepost = async(req,res)=>{
    try{
        const {post,user} = req.body;
        const likepost = await Like({post,user});
        const savelikepost  =await likepost.save();
        const upadatePost = await Post.findByIdAndUpdate(post,{$push:{likes:savelikepost._id}},{new:true}).populate('likes').exec();
        res.json({
            post:upadatePost
        })
    }catch(err){
        console.log("Error while like a post");
        console.log(err);
    }
}

exports.unlikepost = async(req,res)=>{
    try{
        const {post,like} = req.body;
        const deletdlike = await Like.findByIdAndDelete({post:post,_id:like});
        const upadatePost = await Post.findByIdAndUpdate(post,{$pull:{likes:deletdlike._id}},{new:true}).populate('likes').exec();
        res.json({
            post:upadatePost,
        })
    }catch(err){
        console.log("Error while like a post");
        console.log(err);
    }
}
