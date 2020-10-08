const express=require('express');
//-------------------------------------- express router use to fetch the controller-----------------------------------//
    const router=express.Router(); 

//---- ------------------------------------fetching homeContoller to show home page-----------------------------------//
    const homeController=require('../controllers/home_controller'); 

//----------------------------------------- fetching createTaskControoler to  fetch form data--------------------------//
    const createTaskController=require('../controllers/createTask_controller'); 

//----------------------------------------------- delele task---------------------------------------------------------//
    const deleteTaskController=require('../controllers/deleteTask_controller');

//------------------------------------------different category controller------------------------------------------------//
    const categoryController=require('../controllers/category_controller');


    router.use(express.urlencoded()); 


console.log("router loded");

router.get('/',homeController.home);
router.post('/create',createTaskController.create);

router.get('/delete-task',deleteTaskController.delete);
router.get('/deleteAllTask',deleteTaskController.all);
router.get('/category',categoryController.go);

module.exports=router;
