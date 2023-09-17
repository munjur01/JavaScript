
/* Static Function: 
        -can not call from object
        -it call from Class
*/
class Person {
    constructor(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }

    
/* Normal Function: 
        -can not call from Class
        -it call from Object
*/
    greeting() {
        console.log(`Hello ${this.firstname} ${this.lastname}!`);
    }

    static test() {
        console.log("I am staic!");
    }
}

let person1 = new Person("King", "Khan");

console.log(person1.greeting());
//console.log(person1.test()); // Get an error
console.log(Person.test());