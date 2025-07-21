
const Todo = require('../models/Todo');

exports.getTodo = async(req,res)=>{
    try{
        const response = await Todo.find({});
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Data is fetch"
            }
        )
    }catch(err){
       console.error(err);
       console.log(err);
       res.status(500).json({
        success:false,
        error:err.message,
        message:"server error"
       })
    }
}


exports.getTodoById = async(req,res)=>{
    try{
        const id = req.params.id;
        const todo = await Todo.findById(id);

        if(!todo){
            return res.status(404).json({
                success:false,
                message:"Not found"
            })
        }

        res.status(200).json({
            status:true,
            data:todo,
            message:"found"
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
