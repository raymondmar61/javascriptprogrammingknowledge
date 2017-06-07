document.write("<h1>Hello World</h1>");
document.write("<br>");

var x = 1;
var y = 5;
document.write(x+y);  //writes 6
document.write("<br>");

var mynumber = 10;
var myboolean = true;
var mystring = "my \"name\" is ha";
document.write(mystring);  //writes my "name" is ha
document.write("<br>");
document.write(typeof(myboolean));  //writes boolean
document.write("<br>");

var age = 20;
if (age==18) {
	document.write("The age is equal to 18.<br>");
} else if (age > 18) {
	document.write("The age is greater than 18.<br>");
} else {
	document.write("The age is less than 18.<br>");
}