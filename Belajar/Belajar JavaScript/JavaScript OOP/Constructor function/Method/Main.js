/** @format */

function Person() {
    this.FirstName = "";
    this.LastName = "";
    this.SayHello = function (Name) {
        console.info(`Hello ${Name} my name is ${this.FirstName}`);
    };
}

const budi = new Person();
budi.FirstName = "Budi";
budi.LastName = "Hardjo";
budi.SayHello("Eko");

const eko = new Person();
eko.FirstName = "Eko";
eko.LastName = "Khannedy";
eko.SayHello("Budi");
