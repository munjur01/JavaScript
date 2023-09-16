// While loop
// print 1 to 10


var i = 1;
while (i <= 10) {
    /*if (i === 4) {
        console.log("Value of i: " + i);
    }
    */
    console.log(i);
    i++;
}

// Sum of 1 to 10; 1+2+3+4+5...10
// Product of 1 to 10; 1*2*3*4*5...10
var i = 1;
var sum = 0;
var product = 1;
while (i <= 10) {
    sum = sum +i;
    product = product * i;
    i++;
}
console.log("Sum of 1 to 10 is: " + sum);
console.log("Product of 1 to 10 is: " + product);