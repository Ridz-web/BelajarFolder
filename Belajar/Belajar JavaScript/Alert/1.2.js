/** @format */

const masuk = confirm("yakin mau masuk?");
if (masuk) {
    const nama = prompt("siapa nama anda");
    alert(`selamat datang ${nama}`);
} else {
    alert("bye bye");
}
