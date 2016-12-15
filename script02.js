window.onload = CustomerInit;

function CustomerInit() {
	if (document.cookie != "") {
		document.getElementById("Customer").innerHTML = "Hello, " + document.cookie.split(";")[0];
		document.getElementById("Address").innerHTML = "What's Your Number, +44" + document.cookie.split(";")[1];
		document.getElementById("Phone").innerHTML = "Where are you living, " + document.cookie.split(";")[2];
		document.getElementById("Day").innerHTML = "Don't you know what day it is! " + document.cookie.split(";")[3];
		document.getElementById("Month").innerHTML = "When did you join us, " + document.cookie.split(";")[4];
		document.getElementById("Desc").innerHTML = "Job done, " + document.cookie.split(";")[5];
		document.getElementById("Cost").innerHTML = "Sooo that'll be, " + document.cookie.split(";")[6];
		document.getElementById("Total").innerHTML = "What! That was a cheap shot, " + document.cookie.split(";")[7];
	}
}
