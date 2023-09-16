//Empty array
var numbers;
numbers = [];
numbers.push(1);
numbers.push(78);
numbers.push("One");
document.write(numbers);
console.log(numbers);

x = "Bangladesh";
var y = x.split("");
document.write("<br>", y);
console.log(y);

x = "Bangladesh is a country";
y = x.split("")
document.write("<br>", y);
console.log(y);

y = x.split("a")
document.write("<br>", y);
console.log(y);

z = x.split(" ")
document.write("<br>", z);
console.log(z);

x = "Bangladesh, China, Finland";
document.write("<br>", x);
console.log(x);

y = x.split(",");
document.write("<br>", y);
console.log(y);

z = y.toString()
document.write("<br>", z);
console.log(z);

x = "Bangladesh is a small country";
y = x.split(" ");
document.write("<br>", y);
console.log(y);

z = y.toString();
document.write("<br>", z);
console.log(z);

z = y.join("/");
document.write("<br>", z);
console.log(z);

z = y.join(" ");
document.write("<br>", z);
console.log(z);

countries = ["BAN", "USA", "UK", "PAK", "IND"];
z = countries.concat(y);
document.write("<br>", z);
console.log(z);

z = x.concat(z, y);
document.write("<br>", z);
console.log(z);

countries.sort()
document.write("<br>", countries);
console.log(countries);

countries.reverse()
document.write("<br>", countries);
console.log(countries);