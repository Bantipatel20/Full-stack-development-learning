
const Todo = require('../models/Todo');

exports.updateTodo = async(req,res)=>{
    try{
       const {id} = req.params;
        const {title,description} = req.body;
        const todo = await Todo.findByIdAndUpdate(
            id,
            {title,description,updateAt:Date.now()},
            { new: true }
        )
        res.status(200).json({
            success:true,
            data:todo,
            message:"update"
        })
    }catch(err){
         console.error(err);
        res.status(500).json({
            status:false,
            error:err.message,
            message:"error aa gaya"
        })
    }
}