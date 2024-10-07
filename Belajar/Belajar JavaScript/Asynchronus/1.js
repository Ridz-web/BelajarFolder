/** @format */

// function loadData() {
//     console.log("mengambil data...");
//     setTimeout(() => {
//         console.log("data berhasil di ambil");
//     }, 2000);
// }
// loadData();

function prossesData() {
    console.log("memprosses data");
    setTimeout(() => {
        console.log("data diproses..");
        setTimeout(() => {
            console.log("data selesai diproses");
        }, 2000);
    }, 1000);
}
prossesData();
