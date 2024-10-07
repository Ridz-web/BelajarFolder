/** @format */

const array1 = ["semangka", "alpukat", "jeruk", "pepaya", "pisang", "melon"];

//apakah array saya menganduh buah alpukat? outputnya true/false

const alpukat = array1.includes("alpukat");

if (alpukat) {
    const posisiAlpukat = array1.indexOf("alpukat");
    const before = posisiAlpukat - 1;
    const after = posisiAlpukat + 1;
    const indexBefore = array1[before];
    const indexAfter = array1[after];
    console.log(`buah sebelum alpukat adalah ${indexBefore}`);
    console.log(`buah sesudah alpukat adalah ${indexAfter}`);
    console.log(`alpukat berda di index ke - ${posisiAlpukat}`);
} else {
    console.log("tidak ada alpukat di sini");
}
