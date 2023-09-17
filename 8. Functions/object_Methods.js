// Object Method
let person = {
    firstname: "Munjur",
    lastname: "Alom",
    dob: "15-02-1999", //number, string, date, array, object

    fullname: function() { //Method
        return `${this.firstname} ${this.lastname}`;
    }

}

console.log(person.firstname);
console.log(person.fullname());

let str = "Bohubrihi";
console.log(str.length);
console.log(str.split()); 