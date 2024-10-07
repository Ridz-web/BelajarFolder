/** @format */
//
// const methodMahaSiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`selamat makan ${this.nama}`);
//     },
//     main: function (jam) {
//         this.energi -= jam;
//         if (this.energi <= 0) {
//             console.log(`hey ${this.nama} energi kamu habis`);
//         } else {
//             console.log(`selamat bermain ${this.nama}`);
//         }
//     }
// };
//
// function MahaSiswa(nama, energi) {
//     let mahaSiswa = Object.create(methodMahaSiswa);
//     mahaSiswa.nama = nama;
//     mahaSiswa.energi = energi;
//     return mahaSiswa;
// }
// let Ridho = MahaSiswa("Ridho", 10);
//
function MahaSiswa(nama, energi) {
    // let this = Object.create(MahaSiswa.prototype)
    this.nama = nama;
    this.energi = energi;
    // return this
}
MahaSiswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    return `selamat makan ${this.nama}`;
};
MahaSiswa.prototype.main = function (jam) {
    if (jam > 2) {
        this.energi -= jam + 2;
    } else {
        this.energi -= jam;
    }
    return `selamat bermain ${this.nama}`;
};
let Ridho = new MahaSiswa("Ridho", 10);
