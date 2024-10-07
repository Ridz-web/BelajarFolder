/** @format */

function addName(firstName, lastName) {
    console.log(firstName, lastName);
}
const fullName = new Function(
    "firstName",
    "lastName",
    "console.log(firstName, lastName)"
);
fullName("Ridho", "budi");
