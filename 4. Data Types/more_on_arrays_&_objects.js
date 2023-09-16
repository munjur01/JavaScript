//array
var arr = [10, 12, 8 ,9];
arr = [10, 12, ["a", "b"], 8 ,9];
document.write("<br>",arr);
console.log("<br>",arr);

var res = arr[2];
document.write("<br>",res);
console.log("<br>",res);

var res = arr[2][0];
document.write("<br>",res);
console.log("<br>",res);

arr = [1, 2, ["a", ["word1", "word2"], "b"],7, 18];
document.write("<br>",arr);
console.log("<br>",arr);

res = arr[2][1][0];
document.write("<br>",res);
console.log("<br>",res);

// array & object 
arr = [1, 2, ["a", "b"],{prop1:"Item1", prop2:"Item2"}];
document.write("<br>",arr);
console.log("<br>",arr);

res = arr[3].prop1;
document.write("<br>",res);
console.log("<br>",res);

arr = ["Item1", "Item2", {prop1:"Item1", prop2:[1, 2, ["a", "b"]]}];
document.write("<br>",arr);
console.log("<br>",arr);

res = arr[2].prop2[2][0]; //Access object & access a
document.write("<br>",res);
console.log("<br>",res);

var obj;
obj = {prop1: "prop 1", prop2: "prop 2", prop3: ["Item 1 of prop 3", "Item 2 of prop 3"]};
document.write("<br>",obj);
console.log("<br>",obj);

res = obj.prop3[0];
document.write("<br>",res);
console.log("<br>",res);

res = obj.prop3[1];
document.write("<br>",res);
console.log("<br>",res);