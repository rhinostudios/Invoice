$(document).ready(function (){

/*
$('.submit').click(function(){
    validateForm();   
});
*/

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
});
}
}
}
}
}
}
});  //Close validate
//
});  //Close start function
/*
/*
Exception: missing ) after argument list
@Scratchpad/2:21
*/
/*
Exception: missing ) after argument list
@Scratchpad/2:21
*/
/*
Exception: missing ) after argument list
@Scratchpad/2:21
*/
/*
Exception: missing ) after argument list
@Scratchpad/2:21
*/
/*
undefined
*/