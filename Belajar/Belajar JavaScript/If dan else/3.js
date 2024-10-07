/** @format */

// let usia = prompt("Berapa Usia Kamu");
// alert("usia anda " + usia);
//
let nama = "Ridho"; //type string
let usia = 15; //type integer Number
let TB = 164.6; //type double float
let BB;
let pacar = null;

BB = 46;

if (pacar == null) {
    pacar = "Kurumi";
} else {
    pacar = "punya saya";
}

// switch (pacar) {
//     case 1:
//         pacar = "punya saya";
//         break;
//     default:
//         pacar = "kurumi";
//         break;
// }

let saldoawal = 50000;
let saldotambah = 20000;
const hutang = 5000;
const total = saldoawal + saldotambah - hutang;
// (/ = bagi)
// (* = kali)

alert(
    `nama saya ${nama} usia saya ${usia} tinggi badan ${TB}cm berat badan saya ${BB}kg Dan pacar saya ${pacar}`
);

alert(
    `Saldo awal saya sebesar ${saldoawal} dan saldo tambahan di rekening saya adalah ${saldotambah} jadi saldo saya sebanyak ${total}`
);
