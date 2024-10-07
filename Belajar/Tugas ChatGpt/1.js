/** @format */
let teks = false;
function pencet() {
    const ubahTeks = document.getElementById("teks");
    if (teks) {
        ubahTeks.textContent = "Belum Dipencet";
    } else {
        ubahTeks.textContent = "sudah Dipencet";
        teks = !teks;
    }
}
