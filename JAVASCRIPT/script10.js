var count = 0; var email = "";
var emailError = 0; var submit = false

function checkForm(form)
  {
    // validation fails if the input is blank
    if(form.Day.value == "") {
      alert("Error: Input is empty!");
      form.inputfield.focus();
      return false;
    }

    // regular expression to match only alphanumeric characters and spaces
    var re = /^[\w ]+$/;

    // validation fails if the input doesn't match our regular expression
    if(!re.test(form.inputfield.value)) {
      alert("Error: Input contains invalid characters!");
      form.inputfield.focus();
      return false;
    }

    // validation was successful
    return true;
  }



var submit = checkForm;
if submit = true{
alert('valid form submitted');
};