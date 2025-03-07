/** @format */
//object literal
// let mahaSiswa = {
//     name: "Ridho",
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`selamat makan ${this.name}`);
//     }
// };
//
// //function declaration
// function Mahasiswa(nama, energi) {
//     mahaSiswa.nama = nama;
//     mahaSiswa.energi = energi;
//
//     mahaSiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`selamat makan ${this.nama}`);
//     };
//     mahaSiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`selamat bermain ${this.nama}`);
//     };
// }
//
// //constructor function
// //keyword new
// function MahaSiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//
//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`selamat makan ${this.nama}`);
//     };
//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`selamat bermain ${this.nama}`);
//     };
// }
// let Ridho = new MahaSiswa("Ridho", 10);
//
const methodMahaSiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`selamat makan ${this.nama}`);
    },
    main: function (jam) {
        this.energi -= jam;
        if (this.energi <= 0) {
            console.log(`hey ${this.nama} energi kamu habis`);
        } else {
            console.log(`selamat bermain ${this.nama}`);
        }
    }
};

//Object.create
function MahaSiswa(nama, energi) {
    let mahaSiswa = Object.create(methodMahaSiswa);
    mahaSiswa.nama = nama;
    mahaSiswa.energi = energi;
    return mahaSiswa;
}
let Ridho = MahaSiswa("Ridho", 10);
