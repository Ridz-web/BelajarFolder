/** @format */

//consturctor function
let MahaSiswa = function () {
    this.nama = "Ridho";
    this.umur = 20;
    this.sayHello = () => {
        console.log(`nama saya ${this.nama} umur saya ${this.umur} th`);
    };
};
const Ridho = new MahaSiswa();
