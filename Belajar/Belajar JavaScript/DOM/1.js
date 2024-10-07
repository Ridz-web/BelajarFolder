/** @format */

const btnBacaSelengkapnya = document.getElementById("btnBacaSelengkapnya");
const teksLengkap = document.getElementById("teksLengkap");

function btnSelengkapnya() {
    if (teksLengkap.style.display === "none") {
        teksLengkap.style.display = "block";
        setTimeout(() => {
            teksLengkap.classList.add("muncul");
            teksLengkap.classList.remove("sembunyi");
            btnBacaSelengkapnya.innerHTML = "Sembunyikan";
        }, 10);
    } else {
        teksLengkap.classList.add("sembunyi");
        teksLengkap.classList.remove("muncul");
        btnBacaSelengkapnya.innerHTML = "Baca Selengkapnya";
        setTimeout(() => {
            teksLengkap.style.display = "none";
        }, 10);
    }
}
