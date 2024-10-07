/** @format */

const teks = document.getElementById("teksP");
const sembuny = document.getElementById("sembunyi");
const tampi = document.getElementById("tampil");

function tampil() {
    teks.classList.remove("hidden");
    sembuny.classList.remove("hidden");
    tampi.classList.add("hidden");
}

function sembunyi() {
    teks.classList.add("hidden");
    sembuny.classList.add("hidden");
    tampi.classList.remove("hidden");
}
