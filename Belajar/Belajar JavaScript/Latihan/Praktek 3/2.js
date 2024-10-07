/** @format */

let lagi = true;
while (lagi) {
    let angka = Math.floor(Math.random() * 10) + 1;
    let sisa = 3;
    let hasil = "";

    while (sisa != 0 || sisa != sisa) {
        const pilih = Number(
            prompt(
                `tebak angka dark antara 1 - 10\n kamu memiliki ${sisa} kesempatan`
            )
        );
        if (pilih > 10) {
            alert("angka tidak boleh lebih besar dari 10");
            lagi = confirm("mau bermain lagi?");
            sisa = sisa;
            break;
        }
        if (pilih == angka) {
            alert("SELAMAT JAWABAN KAMU BENAR");
            lagi = confirm("mau bermain lagi?");
            sisa = sisa;
            break;
        } else if (pilih > angka) {
            sisa -= 1;
            alert(
                `jawaban kamu salah kamu masih memiliki sisa ${sisa} kesempatan lagi`
            );
        } else if (pilih < angka) {
            sisa -= 1;
            alert(
                `jawaban kamu salah kamu masih memiliki sisa ${sisa} kesempatan lagi`
            );
        } else {
            alert("tolong masukkan angka!!");
            lagi = confirm("mau bermain lagi?");
            sisa = sisa;
            break;
        }
        if (sisa == 0) {
            alert("kesempatan kamu sudah habis!!");
            lagi = confirm("mau bermain lagi?");
            break;
        }
    }
}

alert("terimakasih sudah mau bermain");
