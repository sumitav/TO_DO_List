/*--------------------------------------------------fetching current date--------------------------------*/
    var today=new Date();

    var date=today.getDate().toString();
    document.getElementById("todayDate").innerHTML=date;

    var month=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    var mon=today.getMonth();
    document.getElementById("month").innerHTML=month[mon];

    var year=today.getFullYear().toString();
    document.getElementById("year").innerHTML=year;

    var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var day=today.getDay();
    document.getElementById("currDay").innerHTML=days[day];

//--------------------------------------------- Set value----------------------------------------//
    let mydueDate;
    var month;
    var date;
    if(today.getMonth()+1<=9){
        month="0"+(today.getMonth()+1);
    }else{
        month=(today.getMonth()+1);
    }

    if(today.getDate()<=9){
        date="0"+today.getDate();
    }else{
        date=today.getDate();
    }
    mydueDate=today.getFullYear()+"-"+month+"-"+date;
    console.log(mydueDate);
    var find=document.querySelector('input[type="date"]');
    find.setAttribute("value",mydueDate);
    find.setAttribute("min",mydueDate);
    find.min=mydueDate;

// ------------------------------------------ notify on add/delete task---------------------------------//
    const notifyContainer = document.getElementById('notify'); 

    function notification(type){
        if (type === 'error') {
            notifyContainer.classList.remove('notify-success');
            notifyContainer.classList.add('notify-error');
            notifyContainer.innerText = "Task Deleted Sussecfully!";
        }else if(type==='deleteAll'){
            notifyContainer.classList.remove('notify-success');
            notifyContainer.classList.add('notify-error');
            notifyContainer.innerText = "Clearing DataBase!!";
        }else if (type === 'success') {
            notifyContainer.classList.remove('notify-error');
            notifyContainer.classList.add('notify-success');
            var check=document.getElementById("check").value;
            if(check){
                notifyContainer.innerText = "Task Added successfully";
            }else{
                notifyContainer.classList.remove('notify-success');
                notifyContainer.classList.add('notify-error');
                notifyContainer.innerText = "Input Field's can't be empty!!";
            }
        }
        notifyContainer.style.display = 'block';
//---------------------------------------- notify for 1000ms--------------------------------------------
        setTimeout(() => {
            notifyContainer.style.display = 'none';
        }, 1000)
    }
