// Normal Declaration
function saySomething(name) {
    console.log('Hi! ' + name);
}

// Function Expression
let saySomething1 = function (name1) {
    console.log('I am ' + name1);
}

// Arrow Function (ES6)
let saySomething2 = (name2) => {
    console.log("I Love " + name2);
}

saySomething("Bohubrihi");
saySomething1("Munjur Alom");
saySomething2("JavaScript");