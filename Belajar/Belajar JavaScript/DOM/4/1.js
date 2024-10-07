/** @format */

function ubahWarna() {
    const judul = document.getElementById("judul");
    judul.style.color = "red";
    document.body.classList.toggle("bgc");
}

const acakWarna = document.createElement("button");
const tButton = document.createTextNode("Acak Warna");
const button = document.getElementById("pencet");

acakWarna.appendChild(tButton);
button.after(acakWarna);

acakWarna.addEventListener("click", function () {
    const random = Math.round(Math.random() * 255 + 1);
    const random1 = Math.round(Math.random() * 255 + 1);
    const random2 = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = `rgb(${random},${random1},${random2})`;
});

function sliderMerah() {
    const sMerah = document.getElementById("merah");
    const sHijau = document.getElementById("hijau");
    const sBiru = document.getElementById("biru");
    const merah = sMerah.value;
    const hijau = sHijau.value;
    const biru = sBiru.value;
    document.body.style.backgroundColor = `rgb(${merah}, ${hijau}, ${biru})`;
}

function sliderHijau() {
    const sMerah = document.getElementById("merah");
    const sHijau = document.getElementById("hijau");
    const sBiru = document.getElementById("biru");
    const merah = sMerah.value;
    const hijau = sHijau.value;
    const biru = sBiru.value;
    document.body.style.backgroundColor = `rgb(${merah}, ${hijau}, ${biru})`;
}

function sliderBiru() {
    const sMerah = document.getElementById("merah");
    const sHijau = document.getElementById("hijau");
    const sBiru = document.getElementById("biru");
    const merah = sMerah.value;
    const hijau = sHijau.value;
    const biru = sBiru.value;
    document.body.style.backgroundColor = `rgb(${merah}, ${hijau}, ${biru})`;
}
