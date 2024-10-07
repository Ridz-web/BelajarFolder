/** @format */

let lagi = true;
while (lagi) {
    const pilih = Number(prompt("tebak angka dark antara 1 - 10"));
    let angka = Math.floor(Math.random() * 10) + 1;
    let hasil = "";

    if (pilih == angka) {
        hasil = "BENAR!";
    } else if (pilih > 10) {
        hasil = " adalah angka yang tidak valid";
    } else if (angka < pilih) {
        hasil = `terlalu besar dari ${angka}`;
    } else if (angka > pilih) {
        hasil = `terlalu kecil dari ${angka}`;
    } else {
        hasil = "!!!tolong masukkan angka!!!";
    }
    alert(`jawaban kamu ${hasil}`);
    lagi = confirm("mau bermain lagi?");
}
alert("terimakasih sudah mau bermain");
