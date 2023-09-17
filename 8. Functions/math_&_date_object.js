// Math and Date object
// Math Object
let val1;
val1 = Math.PI;
val1 = Math.E;
val1 = Math.round(23.5);
va1 = Math.ceil(3.2);
val1 = Math.floor(3.9);
val1 = Math.sqrt(81);
val1 = Math.abs(-56);
val1 = Math.pow(2, 8);
val1 = Math.min(2,3,1,0,-8);
val1 = Math.max(-1,2,4,5);
val1 = Math.random();

val1 = Math.floor(Math.random() * 30 + 1);

console.log(val1);


// Date Object
let val;
let today = new Date();

val = today;
val = today.toString();

let birthday = new Date('11-2-1995 8:25:00');
birthday = new Date('November 2 1995');
birthday = new Date('11/2/1995');
val = birthday;
val = today.getMonth(); // Start from 0
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

// Timestamp -> amount of time past since Jan 1st 1970

birthday.setMonth(0);
birthday.setDate(12);
birthday.setFullYear(1996);
birthday.setHours(3);

console.log(val);
console.log(birthday);