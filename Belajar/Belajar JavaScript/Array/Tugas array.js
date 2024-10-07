/** @format */

let array = [4, 6, 8, "*", 12, 14];
let index = array.indexOf("*");
let nilai = (array[index - 1] + array[index + 1]) / 2;
console.log(nilai);

