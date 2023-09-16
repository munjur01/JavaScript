//Topic Description
var x;
x = "Hello World";
document.write(x);
x = 'Hello World';
document.write("<br>",x);
x = "Hello \" World";
document.write("<br>",x);
x = "Hello  World";
document.write("<br>",x);
var y = 'Hello \' World';
document.write("<br>",y);

//Concatenation
x = "Hello" + "World"
document.write("<br>",x);


var x = "Hello World";

//Length of String
x = x.length; //It is a property
document.write("<br>",x);

//Indexing
x= "Hello World"[0];
document.write("<br>",x);
x = "Hello World"[3]
document.write("<br>",x);
x = "Hello World";
document.write("<br>",x);
x = "Hello World";
y = x[0];
document.write("<br>",y);
y = x[3];
document.write("<br>",y);

//UpperCase
x = "Bohubrihi";
y = x.toUpperCase();
document.write("<br>",y);
y = x.toLowerCase();
document.write("<br>",y);

//Ignore whitespace
x = "   Munjur"
y = x.trim();
document.write("<br>",y);

// Slice
x = "Munjur Alom"
y = x.slice(1, 5);
document.write("<br>",y);
y = x.slice(-7, -1);
document.write("<br>",y);

//Replace
x = "Kader Ali"
y = x.replace("Ali", "Khan");
document.write("<br>",y);

//concat
y = x.concat(" Student", " of", " Bohubrihi");
document.write("<br>",y);

/*
// return a new string, doesn't change x
//These are methods
x.slice(1, 5);
x.slice(-6, -1);
x.substr(3, 2); // 2nd parameter means the length
x.replace("Hello", "World");
x.toUpperCase();
x.toLowerCase();
x.concat("1", "2");
*/
