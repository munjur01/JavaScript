//Collection of items
/* countries = ["Bangladesh", "USA", "UK"]

countries[0]
countries[1]

country = countries[0]
country

//Mutable
countries[0] = "Poland"
countries
countries.length;
countries[countries.length] = "Norway"

//Push and Pop
countries.push("China"); // return length
countries.pop() // returns length
countries.push("Japan", "Srilanka");
countries.shift() //returns the shifted
countries.unshift("Germany") // returns length
*/

var countries = ["Bangladesh", "USA", "UK"];
document.write(countries);
var country = countries[1];
document.write("<br>",countries);
country = countries.length; // Length of Array
document.write("<br>",country);
countries[1] = "Proland"; // change country name in the position of index 1
country =countries[1];
document.write("<br>",country);
document.write("<br>",countries); // view countries after changing
// now insert new country in this array
countries[3] = "Norway";
document.write("<br>",countries); 
countries[countries.length] = "Sweden";
document.write("<br>",countries); 