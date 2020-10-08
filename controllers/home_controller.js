const ToDo=require('../models/todoList');
module.exports.home=function(req,res){
    ToDo.find({},function(err,ToDo_Items){
        if(err){
            console.log('Error in finding DB');
            return;
        }
        return res.render('home',{
            title:"ToDo App",
            ToDo_List:ToDo_Items
        });
    });
}