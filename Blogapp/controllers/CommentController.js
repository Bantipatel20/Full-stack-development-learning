
const Post  = require("../models/PostModel");
const Comment = require("../models/CommentModel");

exports.createComment = async(req,res)=>{
    try{
        const {post,user,body} = req.body;
        const comment = new Comment({post,user,body})
        const savecomment = await comment.save();
        const upadatePost = await Post.findByIdAndUpdate(post, {$push:{comments:savecomment._id}},{new:true}).populate("comments").exec();
        res.json({
            post:upadatePost
        })
    }catch(err){
        return res.json({
            error:"Error While creating comments"
        })
    }
}