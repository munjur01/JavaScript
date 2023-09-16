/*
primitive types:...
Example: Numer, String, Boolean
- Deals with value & 
- Different Address
*/
let a = 7;
b = a; // b =7

a = 43;
console.log(b);
document.write(b);

/*
 Reference types:...
Example: Array, Object
- Deals with Address (Same Address)

*/
let numbers = [1, 2, 3];
let newNumbers = numbers;
console.log(newNumbers);
document.write("<br>",newNumbers);

numbers[1] = 500;
console.log(numbers);
document.write("<br>",numbers);
console.log(newNumbers);
document.write("<br>",newNumbers);
