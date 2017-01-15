var x = document.getElementById("myForm");
var txt = "";
var i;
for (i = 0; i < x.length; i++) {
    txt = txt + x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = txt;

// Get element from form
// Print into demo area of page