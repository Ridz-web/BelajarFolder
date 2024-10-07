/** @format */

const array1 = ["semangka", "alpukat", "jeruk", "pepaya", "pisang", "melon"];

//apakah array saya menganduh buah alpukat? outputnya true/false

const alpukat = array1.includes("alpukat");
const posisiAlpukat = array1.indexOf("alpukat");

if (alpukat) {
    console.log(`alpukat berda di index ke - ${posisiAlpukat}`);
} else {
    console.log("tidak ada alpukat di sini");
}
