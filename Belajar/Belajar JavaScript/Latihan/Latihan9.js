/** @format */
let pilihan = ["×", "+", "-", ":"];
const angka1 = parseFloat(prompt("Masukkan angka pertama"));
const angka2 = parseFloat(prompt("masukkan angka ke 2"));
let input;

if (isNaN(angka1) || isNaN(angka2)) {
    alert("masukkan angka!");
} else if (angka1 === "" || angka2 === "") {
    alert("masukkan angka");
} else {
    do {
        input = prompt("Masukkan opsi × / + / - / :");
        if (!pilihan.includes(input)) {
            alert("masukkan opsi yang benar");
        } else if (input == "×") {
            alert(`${angka1} × ${angka2} = ${angka1 * angka2}`);
        } else if (input == "+") {
            alert(`${angka1} + ${angka2} = ${angka1 + angka2}`);
        } else if (input == "-") {
            alert(`${angka1} - ${angka2} = ${angka1 - angka2}`);
        } else if (input == ":") {
            alert(`${angka1} : ${angka2} = ${angka1 / angka2}`);
        }
    } while (!pilihan.includes(input));
}
