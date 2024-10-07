/** @format */

function luasLingkaran(jariJari) {
    return Math.PI * jariJari * jariJari;
}
const jariJari = Number(prompt("jari-jari lingkaran adalah"));
const luas = luasLingkaran(jariJari);
alert("Luas lingkaran adalah" + luas + "cm");
