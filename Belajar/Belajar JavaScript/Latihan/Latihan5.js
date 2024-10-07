/** @format */
let volumeKubus = 3;
let lagi = true;
let jawaban = "";
while (lagi) {
    const yakin = confirm(
        "kita akan menjumlahkan 2 volume kubus,\ningin melanjutkan?"
    );
    if (yakin) {
        const kubusPertama = Number(
            prompt("tentukan ukuran sisi kubus pertama")
        );
        const kubusKedua = Number(prompt("tentukan ukuran sisi kubus kedua"));
        if (kubusPertama == "" || kubusKedua == "") {
            alert("Tolong masukkan angka!!");
        } else if (isNaN(kubusPertama) || isNaN(kubusKedua)) {
            alert("tolong masukkan angka!!");
        } else {
            alert(`sisi kubus pertama dan ke dua dipangkatkan 3 lalu di jumlahkan\n
            ${kubusPertama} dipangkat 3 = ${kubusPertama ** volumeKubus}\n
            ${kubusKedua} dipangkat 3 = ${kubusKedua ** volumeKubus}\n\n
            ${kubusPertama ** volumeKubus} + ${kubusKedua ** volumeKubus} = ${
                kubusPertama ** volumeKubus + kubusKedua ** volumeKubus
            }`);
        }
    } else {
        alert("baiklah sampai bertemu lagi!");
        break;
    }
    lagi = confirm("ingin menghitung lagi?");
}
alert("terimakasih!!");
