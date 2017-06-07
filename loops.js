var a = 0;
var result;

while (a < 10) {
	result = "<br>"+a;
	document.write(result);
	a++;
}
document.write("<p>");

var b = 0;
do {
	document.write("<br>"+b);
	b++;
} while (b <=10)

while (a <= -1) {
	result = "While Loop <br>"+a;
	document.write(result);
	a++;
}
document.write("<p>");

var b = 0;
do {
	document.write("Do Loop<br>"+b);
	b++;
} while (b <=-1)
document.write("<p>");

for(a=0; a<10; a++){
	document.write("<br>");
	document.write(a);
}
document.write("<p>");

var c = 0;
for(; c<10; c++){
	document.write(" No initialize works, too.<br>");
	document.write(c);
}
document.write("<p>");

for(d=0, result=""; d <=10; d++){
	result = d+" Multiple initializations <br>";
	document.write(result);
}
document.write("<p>");

var names = ["tom", "mark","Ben","jack","john"];
for (a=0; a<names.length; a++) {
	document.write(names[a]+"<br>");	
}
document.write("<p>");

var student = {name: "Mark", surname: "tesar", age:22};
var x;
for (x in student) {
	document.write(x+": "+student[x]+"<br>");
}