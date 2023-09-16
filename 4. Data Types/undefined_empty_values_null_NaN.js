// undefined_empty_values_null_NaN
var a, y;
y = a == undefined
document.write(y); // true
console.log(y); // true

a = null;
// true

null == undefined
// true

null === undefined // it's mean valu with type 
// false

var b = "";
// empty 

b == a
// false

null == ""
// false

undefined == ""
// false

var c = "abc"/10;
// false. 
// here c is NaN

NaN == null
// false 

NaN == undefined
// false

NaN == ""
// false