/** @format */

document.getElementById("cari").addEventListener("click", function () {
    const nama = document.getElementById("nama").value;
    const orang = document.getElementById("orang").value;
    if (nama || orang == document.getElementById("nama", "orang")) {
        alert(`nama kamu ${nama} dan nama teman baru mu ${orang}`);
    } else {
        alert("silahkan masukkan nama");
    }
});
