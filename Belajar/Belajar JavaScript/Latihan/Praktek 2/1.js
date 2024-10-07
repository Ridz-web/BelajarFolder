/** @format */

let tanya = true;
while (tanya) {
    //menangkap pilihan player
    const pilih = prompt("pilih : gajah, orang , semut");
    //menangkap pilihqn computer
    //membangkitkan bilangan random
    let comp = Math.random();
    if (comp < 0.34) {
        comp = "gajah";
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = "orang";
    } else {
        comp = "semut";
    }
    //menentukan rules
    let hasil = "";

    if (pilih == comp) {
        hasil = "SERI";
    } else if (pilih == "gajah") {
        if (comp == "orang") {
            hasil = " MENANG!";
        } else {
            hasil = "KALAH!";
        }
    } else if (pilih == "orang") {
        if (comp == "semut") {
            hasil = "MENANG!";
        } else {
            hasil = "KALAH!";
        }
    } else if (pilih == "semut") {
        hasil = comp == "gajah" ? "MENANG!" : "KALAH!";
    } else {
        hasil = "kamu memasukkan pilihan yang salah";
    }

    //menampilkan hasil
    alert(
        `kamu memilih : ${pilih} dan komputer memilih : ${comp}\n maka hasilnya : kamu ${hasil}`
    );
    tanya = confirm("ingin bermain lagi?");
}
alert("terimakasih sudah bermain");
