
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/To_Do_App_db');
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error connectiong to db'));
db.once('open',function(){
    console.log("Sucessfully connected to the database.");
});