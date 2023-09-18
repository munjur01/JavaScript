
// Project 1: Simple Calculator

//console.log("Select an Option: \n1. Add \n2. Subtract \n3. Mulitply \n4. Divide");

var num1 = prompt("Enter First Number: ");
var num2 = prompt("Enter Second Number: ");
var option = prompt("Choose a Number for an Operation: \n1. For Add \n2. For Subtract \n3. For Mulitply \n4. For Divide");
var result = null;

num1 = parseInt(num1);
num2 = parseInt(num2);
option = parseInt(option);

var num1Con = isNaN(num1);
var num2Con = isNaN(num2);
var optionCon = isNaN(option);
if (num1Con || num2Con || optionCon) {
    console.log("Invalid Input!");
    window.alert("Invalid Input!");
} else {
    switch (option) {
        case 1:
            result = num1 + num2;
            break;
        case 2:
            result = num1 - num2;
            break;
        case 3:
            result = num1 * num2;
            break;
        case 4:
            result = num1 / num2;
            break;
        default:
            break;
    }

    if (result == null) {
        console.log("No Result!");
        window.alert("No Result!");
    }
    else {
        console.log("Result: " + result);
        window.alert("Result: " + result);
    }
} 