var student;
student = {name:"Rahim", age:25, hometown:"Dhaka"};
document.write(student);
console.log(student);

//access object property 1st way
var res = student["name"];
document.write("<br>",res);
console.log("<br>",res);

var res = student["age"];
document.write("<br>",res);
console.log("<br>",res);

var res = student["hometown"];
document.write("<br>",res);
console.log("<br>",res);

//access object property 2nd way
var res = student.name;
document.write("<br>",res);
console.log("<br>",res);

var res = student.age;
document.write("<br>",res);
console.log("<br>",res);

var res = student.hometown;
document.write("<br>",res);
console.log("<br>",res);

// add new property in this object
student["type"] = "teacher";
document.write("<br>",student);
console.log("<br>",student);

student.village = "Soguna";
document.write("<br>",student);
console.log("<br>",student);

// Delete a property from this object
delete student.village;
document.write("<br>",student);
console.log("<br>",student);

// Empty object define
var stu = {};
// add property in this object
stu.name = "Karim";
stu.age = 27;
stu.type = "Student";
stu.hometown = "Sirajganj";
document.write("<br>",stu);
console.log("<br>",stu);
