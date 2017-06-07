var names = ["tom","jahn","bill","mark"];
document.getElementById("demo").innerHTML = names;  //prints tom,jahn,bill,mark
document.getElementById("demo1").innerHTML = names[1];  //prints jahn
names[0] = "Tom";
document.getElementById("demo").innerHTML = names;  //prints Tom,jahn,bill,mark
names[4] = "juli";
document.getElementById("demo").innerHTML = names;  //prints Tom,jahn,bill,mark,juli
names.push("ben");  //add a new value at the end of the array
document.getElementById("demo").innerHTML = names;  //prints Tom,jahn,bill,mark,juli,ben
document.getElementById("demolength").innerHTML = names.length;  //prints 6
document.getElementById("demosort").innerHTML = names.sort();  //prints Tom,ben,bill,jahn,juli,mark

var namesnumbers = ["tom","jahn","bill",500];
document.getElementById("demonamesnumbers").innerHTML = namesnumbers;  //prints tom,jahn,bill,500

var namesdeclare = new Array("tom","jahn","bill",500);
document.getElementById("demodeclare").innerHTML = namesdeclare; //prints tom,jahn,bill,500
namesdeclare.pop();  //remove the last element in an array
document.getElementById("demodeclarepop").innerHTML = namesdeclare; //prints tom,jahn,bill
namesdeclare.shift();  //remove the first element in an array
document.getElementById("demodeclareshift").innerHTML = namesdeclare; //prints jahn,bill
namesdeclare.unshift("ben");  //add new element at zero index in an array
document.getElementById("demodeclareunshift").innerHTML = namesdeclare; //prints ben,jahn,bill