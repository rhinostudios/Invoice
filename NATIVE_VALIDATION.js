//Javascript Useful tidbits
// for Validating Files in HTML

//Email Test using INDEXOF
function Validate(){
	if (document.forms.email.value.indexOf(@)==-1){
	fail("No @ in address");
	}
}
//Regular Expressions
//src regular-expressions.info/javascript.html

var all = /^[A-Za-z0-9_ ]+$/
//Can also write as
var alt = /^[\w_ ]+$/
//W means word as in letter, num
//also allow underscores and spaces

//ERROR: Space in exp may cause bugs!

//Native JS Validation use MATCH
//src StackOverflow.com
var alpha = /^[A-Za-z ]+$/

if (document.forms.invoice.Customer.match(alpha)){
	var count +=1
	else alert ("Please enter only letters");