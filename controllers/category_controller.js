const ToDo=require('../models/todoList');
module.exports.go=function(req,res){

    var displayCategoryData=req.query.category; //---- for category fetching
    console.log(displayCategoryData);
    if(displayCategoryData==='all'){
        return res.redirect('/');
    }
    else{
        ToDo.find({category:displayCategoryData},function(err,ToDo_Items){
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
}
