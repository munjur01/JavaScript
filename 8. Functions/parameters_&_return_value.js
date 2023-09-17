// FUnction parameter/argument

function user_name(fname = "M", lname = "R") {
    console.log(`Hello ${ fname } ${ lname }!`);
}

let firstname = "Munjur";
let lastname = "Alom";

user_name(firstname, lastname);

var sum;
function addNum(a=0, b=0) {
    sum = a+b;
    return sum;
}

addNum(4,5);
console.log("Sum of Two Integer Number is: "+sum);
addNum(3.6, 2.3);
console.log("Sum of Two Float Number is: "+ sum);