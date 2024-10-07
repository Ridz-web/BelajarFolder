/** @format */

let lagi = true;

while (lagi) {
    function totalVolume(s1, s2) {
        let volume1;
        let volume2;
        let total;

        volume1 = s1 ** 3;
        volume2 = s2 ** 3;
        total = volume1 + volume2;
        return total;
    }
    let kubusPertama = Number(prompt("tentukan ukuran sisi kubus pertama"));
    let kubusKedua = Number(prompt("tentukan sisi kubus kedua"));
    if (
        isNaN(kubusPertama) ||
        kubusPertama == "" ||
        isNaN(kubusKedua) ||
        kubusKedua == ""
    ) {
        alert("tolong masukkan ukuran sisi kubus");
    } else {
        alert(
            `Hasil dari volume kubus pertama + volume kubus kedua = ${totalVolume(
                kubusPertama,
                kubusKedua
            )}`
        );
    }
    lagi = confirm("mau menghitung lagi?");
}
alert("semoga beruntung");
