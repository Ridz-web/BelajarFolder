/** @format */

function Bus(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    };
    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang.length === 0) {
            console.log("penumpang di bus ini masih kosong");
            return false;
        }
        for (let kursi = 0; kursi < this.penumpang.length; kursi++) {
            if (this.penumpang[kursi] == namaPenumpang) {
                this.penumpang[kursi] = undefined;
                this.kas = bayar;
                return this.pemumpang;
            }
        }
    };
}
let bus1 = new Bus("Ridho", ["Semarang", "Bandung"], [], 0);
let bus2 = new Bus("Budi", ["Semarang", "Jakarta"], [], 0);
let bus3 = new Bus("Ali", ["Semarang", "Yogyakarta"], [], 0);
