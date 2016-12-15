window.onload = validateForm;

//$('.submit').click(function(){
//    validateForm();   
//});

//$('.submit').validate({
var count = true;
var email = "";
var emailError = 0;
var submit = false

function validateForm(){ // NEW function 22/11/14
$('#invoice').validate({ // initialize the plugin
rules: {
"Day": {required: true,rangelength: [1,31],number: true},
"Month": {required: true,rangelength: [1,31],number: true},
"Customer": {required: true,max: 16},
"Phone": {required: true,rangelength: [12],number: true},
"Address": {required: true,max: 32},
"Desc": {required: true,max: 198},
"Cost": {required: true,max: 64},
"Total": {required: true,rangelength: [3],number: true}
},    //Close rules
//
//submitHandler: function(form) {     23/11/14
//$('#invoice,#inputid2, etc...').keyup(function() {
//   var hidden = false;
$('#invoice,#inputid2, etc...').each(function() {
if ($(this).val().length == 0) {
alert('valid form submitted');
var submit = true
}
})
if (submit) {
$('#submitbutton').show();
// do other things for a valid form
var count = true
} else {
$('#submitbutton').hide();
}
});
//form.submit();                  23/11/14
//}                              23/11/14
//});                          23/11/14
/* Hide submit button once pressed to prevent double entry
$('#checkoutBT').click(function(){
$(this).hide();
});
OR
submitHandler: function(form) {
        $('#checkoutBT').hide();
        form.submit();       
*/
//}); or };                        ERROR 22/11/14
};
//}    //Close start funct
//)    //Close start function ==== Validate is missing
//}    //Close NEW function
//}    //Close submit function
//)    //Close document function
