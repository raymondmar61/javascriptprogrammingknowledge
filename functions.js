function printMessage() {
	document.getElementById("demo").innerHTML = "Hello world";
}
printMessage();  //print "Hello world"

function add(num1, num2) {
	return num1+num2;
}
document.getElementById("sum").innerHTML = add(100,200); //return 300
document.getElementById("sum1").innerHTML = add(1000,2000);  //return 3000