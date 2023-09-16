/*
Control Flow
if, else; if, else if, else statement 
*/
/*

// if statement 
if (condition) {
    // code to be executed when condition is true
}
*/
var age1 = 50;
if (age1 >= 50) {
    console.log("Old Person");
}

/*
// if else statement
if (condition) {
    // code to be executed when condition is true
}
else {
    // other code to be executed 
}
*/
var age2 = 30;
if (age2 >= 50) {
    console.log("Old Person");
}
else {
    console.log("Young Person");
}

/*
// if, else if, else statement 
if (condition) {
    // code to be executed when condition is true
}
else if (condition) {
    // code to be executed when condition is true
}
else {
    // other code to be executed 
}
*/
var age;
age = prompt("Enter Your Age: ");
if (age >= 50) {
    console.log("Old Person");
    window.alert("You are Old Person");
}
else if (age >= 18 && age < 50) {
    console.log("Young Person");
    window.alert("You are Young Person");
}
else {
    console.log("Kid Person");
    window.alert("You are Kid Person");
}