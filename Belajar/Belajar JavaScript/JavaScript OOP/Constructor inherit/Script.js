/** @format */

function Employee(firstName) {
    this.firstName = firstName;
    this.sayHello = function (name) {
        console.info(`Hello ${name} my name is ${this.firstName}`);
    };
}
function manager(firstName, lastName) {
    this.lastName = lastName;
    Employee.call(this, firstName);
}
const ridho = new manager("Ridho", "Budi");
console.info(ridho);
