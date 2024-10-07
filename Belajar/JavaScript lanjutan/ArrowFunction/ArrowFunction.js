/** @format */

// const tampilNama = nama => `halo ${nama}`;
//
// console.log(tampilNama('ridho'))

// const tampilNama = (nama, waktu) => `selamat ${waktu}, ${nama}`;
// console.log(tampilNama("Ridho", "pagi"));

let namaSiswa = ["Ridho", "Budi", "Ridho Budi"];

// let jumlahHuruf = namaSiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

//MENGGUNAKAN ARROW FUNCTION

// let jumlahHuruf = namaSiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

//MENJADIKAN OBJECT
let jumlahHuruf = namaSiswa.map(nama => ({
    nama: nama,
    jmlHuruf: nama.length
}));
console.table(jumlahHuruf);
