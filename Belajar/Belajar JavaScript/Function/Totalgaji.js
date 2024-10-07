/** @format */

function totalGaji1Bulan(nama, gajiPerHari, jumlahHariKerja) {
    let totalGaji = gajiPerHari * jumlahHariKerja;
    return `Nama Karyawan: ${nama}\nGaji per-hari: ${gajiPerHari}\nljumlah hari kerja: ${jumlahHariKerja}\nTotal Gaji: Rp${totalGaji}`;
}

let namaKaryawan = prompt("Nama karyawan");
let gajiPerHari = Number(prompt("Gaji perhari karyawan"));
let jumlahHariKerja = Number(prompt("Jumlah hari kerja"));

let hasilGaji = totalGaji1Bulan(namaKaryawan, gajiPerHari, jumlahHariKerja);
alert(hasilGaji);
