//Booleans

var x, y, result;
x = 10;
y = 9;
result = x>y;
document.write(result);// returen true
result = -x>y;
document.write("<br>",result);// returen false

result = "Hello" == "Hello"
document.write("<br>",result);// returen true

var x = "Hello";
var y = Boolean(x);
document.write("<br>",y);// returen true
var z;
document.write("<br>",z);// returen undefined

x = null
y = Boolean(x);
document.write("<br>",y);// returen false

x = 10 / "H";
y = Boolean(x);
document.write("<br>",y);// returen false

var myVar;
Boolean(x);
document.write("<br>",y);// returen false
