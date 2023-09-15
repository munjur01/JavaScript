// String Operators
var line1, line2, line3, line4, result;
// String add or Concatenation
line1 = "Hi! My Name is ";
line2 = "Munjur Alom";
result = line1 + line2;
document.write(result);

// Number + string not possible
line3 = 36;
result = line3 + line2;
document.write("<br>", result);

line4 = 5;
// Normally he sum
result = line3 + line4;
document.write("<br>", result);

//number convert string then add or Concatenation
result = line2 + line3 + line4;
document.write("<br>", result);

//Normally he sum then number convert string then add or Concatenation
result = line3 + line4 + line2;
document.write("<br>", result);

var line5, line6;
line5 = "25";
line6 = "3";
result = line5 + line6;
document.write("<br>", result);

result = line5 - line6;
document.write("<br>", result);