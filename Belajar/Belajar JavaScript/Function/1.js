/** @format */

function addName(firstName, lastName) {
    console.log(firstName, lastName);
}
addName("Ridho budi", "mutaali");

function addName2(firstName, lastName) {
    console.log("nama depan : ", arguments[0]);
    console.log("nama akhir : ", arguments[1]);
}
addName2("Ridho budi", "mutaali");
