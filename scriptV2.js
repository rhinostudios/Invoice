$(document).ready(function(){

$('.submit').click(function(){
    validateForm();   
});

//$('.submit').validate({

function validateForm(){ // NEW function 22/11/14
$('#invoice').validate({ // initialize the plugin
rules: {
Day: {required: true,rangelength: [1,31],number: true},
Month: {required: true,rangelength: [1,31],number: true},
Customer: {required: true,max: 16},
Phone: {required: true,rangelength: [12],number: true},
Address: {required: true,max: 32},
Desc: {required: true,max: 198},
Cost: {required: true,max: 64},
Total: {required: true,rangelength: [3],number: true}
}    //Close rules
}
)
//})  //Close validate
//
//)  //Close start function
//
//) //Close document function
}
}
)
