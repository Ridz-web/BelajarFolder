/** @format */

let lagi = true;
while (lagi) {
    let user = prompt("pilih batu,gunting atau kertas");
    let comp = Math.random();
    if (comp < 0.34) {
        comp = "gunting";
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = "batu";
    } else {
        comp = "kertas";
    }
    let hasil = "";
    if (user == comp) {
        hasil = "SERI";
    } else if (user == "gunting") {
        if (comp == "batu") {
            hasil = "MENANG";
        } else {
            hasil = "KALAH";
        }
    } else if (user == "batu") {
        if (comp == "kertas") {
            hasil = "KALAH";
        } else {
            hasil = "MENANG";
        }
    } else if (user == "kertas") {
        if (comp == "batu") {
            hasil = "MENANG";
        } else {
            hasil = "KALAH";
        }
    } else {
        alert("memasukkan pilihan yang salah");
    }
    alert(`kamu memilih : ${user}\n
           computer memilih : ${comp}\n
           hasilnya : kamu ${hasil}
    `);
    lagi = confirm("mau main lagi?");
}
alert("terimakasih sudah mau bermain!");
