// JavaScript Object
var student = {
    name: "Rahim",
    age: 26,
    hometown: "Dhaka"
};
// Convert JavaScript Object to JSON String
var student_json = JSON.stringify(student);
console.log(student_json);

// Convert JSON String to JavaScript Object
var student_new = JSON.parse(student_json);
console.log(student_new); 