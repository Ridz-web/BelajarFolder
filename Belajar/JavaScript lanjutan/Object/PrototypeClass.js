/** @format */

class MahaSiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }
    makan(porsi) {
        this.energi += porsi;
        return `selamat makan ${this.nama}`;
    }
    main(jam) {
        this.energi -= jam;
        return `selamat bermain ${this.nama}`;
    }
}
let Ridho = new MahaSiswa("Ridho", 10);
