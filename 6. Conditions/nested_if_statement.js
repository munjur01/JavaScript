// Find the largest number using Nested if Statement 
var n1 = prompt("Enter First Number: ");
var n2 = prompt("Enter Second Number: ");
var n3 = prompt("Enter Third Number: ");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

if (n1 >= n2) {
    if (n1 >= n3) {
        console.log(n1 + " is the Largest Number!");
    }
    else {
        console.log(n3 + " is the Largest Number!");
    }
} else {
    if (n2 >= n3) {
        console.log(n2 + " is the Largest Number!");
    }
    else {
        console.log(n3 + " is the Largest Number!");
    }
} 