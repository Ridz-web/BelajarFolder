/** @format */
//memanggil array didalam array
let myArr = ["Ridho", 3, true, [4, 5, 6]];
console.log(`memanggil array dalam array\n ${myArr[3][1]}`);

//memanggil array menggunakan looping
let arr = ["Ridho", "Budi", "Muta'ali"];

for (var i = 0; i < arr.length; i++) {
    console.log(`memanggil array menggunakan looping\n${arr[i]}`);
}
//method join
let array = ["Ridho", "Budi", "Muta'ali"];
console.log(`memanggil array menggunakan method join\n${array.join("_")}`);
