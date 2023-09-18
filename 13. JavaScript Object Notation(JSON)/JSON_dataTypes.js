/*
    JSON Data Types Supported: 
        -> String
        -> Number
        -> Object (JSON Object)
        -> Array 
        -> Boolean
        -> Null

    JSON Data Types Does Not Supported:
        -> Date
        -> Undefined
        -> Function
*/
var person = {
    name: "Rahim", // String
    age: 25, // Number
    hometown: "Dhaka",
    Married: false, // Boolean
    dob: 1995-5-12, // Date
    test_null: null, // Null
    test_undefined: undefined, // Undefined
    greet: function(){                          // Function
        console.log(`Hello ${this.name}`)
    }
}

var person_json = JSON.stringify(person);
console.log(person_json);