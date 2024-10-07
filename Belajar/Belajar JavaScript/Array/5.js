/** @format */

//array foreEach

let nama = ["Ridho", "Budi", "Ali", "ketut"];
nama.forEach(function (e, i) {
    console.log(`murid ke-${i + 1} dengan nama ${e}`);
});

//array map
let angka = [1, 2, 3, 4, 5];
angka.map(function (e) {
    return e * 2;
});
console.log(angka.join("-"));

// array sort
let angka2 = [2, 5, 10, 7, 1, 6, 3, 8, 4, 9];
angka2.sort(function (a, b) {
    return a - b;
});
console.log(angka2.join("-"));
