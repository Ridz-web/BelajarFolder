/** @format */

const budi = confirm("ingin berkenalang dengan Budi?");
if (budi) {
    let nama = prompt("Nama kamu siapa?");
    alert(`Hello Namaku budi senang berkenalan denganmu ${nama}`);
} else {
    const eko = confirm("Ingin berkenalan dengan Eko?");
    if (eko) {
        let nama = prompt("siapa Nama mu?");
        alert(`Hello ${nama} Namaku Eko`);
    } else {
        alert("cuek amat");
    }
}
