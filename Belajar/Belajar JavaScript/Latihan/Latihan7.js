/** @format */

let penumpang = ["Ridho", undefined, "ali"];
let tambahPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        for (let kursi = 0; kursi < penumpang.length; kursi++) {
            if (penumpang[kursi] == undefined) {
                penumpang[kursi] = namaPenumpang;
                return penumpang;
            } else if (penumpang[kursi] == namaPenumpang) {
                console.log(`${namaPenumpang} sudah ada di dalam angkot`);
                return penumpang;
            } else if (kursi == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
};

let hapusPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        console.log("angkot masih kosong");
        return penumpang;
    } else {
        for (let kursi = 0; kursi < penumpang; kursi++) {
            if (penumpang[kursi] == undefined) {
            } else if (kursi == penumpang.length - 1) {
                console.log(`${namaPenumpang} tidak ada di dalam angkot.`);
            }
        }
    }
    return penumpang;
};
