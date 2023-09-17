// Sub Class
// Inheritance

class Person { //Base Class
    constructor(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }

    greeting() {
        return `Hello ${this.firstname} ${this.lastname}!`;
    }
}

class Customer extends Person { //Sub Class
    constructor(fname, lname, phone, memberShip) {
        super(fname, lname);

        this.phone = phone;
        this.memberShip = memberShip;
    }

    fullname() {
        console.log(this.firstname, this.lastname);
    }
}

let person1 = new Person("Munjur", "Alom");
console.log(person1);
console.log(person1.greeting());


let customer1 = new Customer("Munjur", "Alom", "01799007755", "1235");
console.log(customer1);
console.log(customer1.greeting());
console.log(customer1.fullname()); 