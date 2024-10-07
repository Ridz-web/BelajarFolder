/** @format */

// cara sebelum versi emma 6
function ConstraFunction() {
    // nama function harus menggunakan kapital setiap awal kata

    this.FirstName = "";
    this.LastName = "";
}

const budi = new ConstraFunction();
budi.FirstName = "Budi";
budi.LastName = "Hardjo";

const eko = new ConstraFunction();
eko.FirstName = "Eko";
eko.LastName = "Khannedy";

console.log(budi);
console.log(eko);
