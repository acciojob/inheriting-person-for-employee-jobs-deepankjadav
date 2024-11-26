// complete this js code
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

// Define the Employee class that inherits from Person
class Employee extends Person {
    constructor(name, age, jobTitle) {
        // Call the parent class's constructor
        super(name, age);
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
