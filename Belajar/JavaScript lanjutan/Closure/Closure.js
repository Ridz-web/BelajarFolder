/** @format */

// EXECUTIONS CONTEXT, HOISTING DAN instance
function satu() {
    var nama = "Ridho";
    console.log(nama);
}
function dua() {
    console.log(nama);
}
console.log(nama);
var nama = "Budi";
satu();
dua("Ali");
console.log(nama);
