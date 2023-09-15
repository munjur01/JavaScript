/*
Steps:
1. Accept a number from user. (Temperature in celcious)
2. Convert it to Fahrenheit (Formula: F = 9/5*c +32)
3. Print the Result as alert! ("Fahrenheit: 98 Degree")
4. print "Task Complete" in console!

sample Output:
Please enter a teamperature: 37
Fahrenheit: 98.60000000000001 Degree
*/
var temp, result;
temp = prompt("Please enter a teamperature: ");
result = 9/5*temp + 32;
window.alert("Fahrenheit: " + result +" Degree");
console.log("Task Complete!");