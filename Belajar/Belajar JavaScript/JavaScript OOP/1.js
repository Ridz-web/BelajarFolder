/** @format */
//object
let siswa = {
    Nama: "Ridho Budi Muta'ali",
    Umur: 15,
    Alamat: {
        Jalan: "Jl. jangli gabeng",
        Kota: "Semarang",
        Provinsi: "Jawa Tengah"
    }
};
//function
function biodataSiswa(nama, kelas, umur, jurusan) {
    let dataSiswa = [];
    dataSiswa.nama = nama;
    dataSiswa.kelas = kelas;
    dataSiswa.umur = umur;
    dataSiswa.jurusan = jurusan;
    return dataSiswa;
}
let siswa2 = biodataSiswa("Ridho Budi M.", 10, 15, "PPLG");

let siswa3 = biodataSiswa("Fandi Ahmad.", 10, 16, "ELEKTRONIKA");

let siswa4 = biodataSiswa(
    "Rafa Artanta B.",
    10,
    15,
    "TEHKNIK KOMPUTER JARINGAN"
);
//Constructor function
function BiodataSiswaSmk(nama, kelas, umur, jurusan) {
    this.nama = nama;
    this.kelas = kelas;
    this.umur = umur;
    this.jurusan = jurusan;
}

let siswa5 = new BiodataSiswaSmk("Ridho Budi M.", 10, 15, "PPLG");

let siswa6 = new BiodataSiswaSmk("M zidan fathul g.", 10, 15, "PPLG");

let siswa7 = new BiodataSiswaSmk("Rafa Artanta B.", 10, 15, "TKR");
