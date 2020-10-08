const mongoose=require('mongoose');

const toDoSchema=new mongoose.Schema({
    taskName:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    dueDate:{
        type:Date,
        required:true
    }
});
const ToDo=mongoose.model('todoList',toDoSchema);

module.exports=ToDo;