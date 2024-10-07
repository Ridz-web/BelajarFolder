/** @format */

const nomorAntri = ~~[Math.random() * 10];
const order = {
    menu1: "Mie Ayam: Rp7.000",
    menu2: "Bakso Mercon: Rp10.000",
    minum1: "Es Teh: Rp3.500",
    minum2: "Jus Jeruk: Rp5.000"
};

function getUser(userName, callback) {
    console.log("konfirmasi data...");
    setTimeout(() => {
        callback({ nomorAntri, userName });
    }, 1000);
}

function getOrder(nomorAntri, callback) {
    console.log(`mengkonfirmasi pesanan...`);
    setTimeout(() => {
        console.log("pesanan telah dikonfirmasi");
        callback({ order });
    }, 2000);
}
function orderDetails(order, callback) {
    console.log("menampilkan pesanan...");
    setTimeout(() => {
        console.log(`pesanan kamu adalah ${order}`);
    }, 1000);
}
getUser("Ridho", function (details) {
    console.log(`nomor antrianmu adalah ke ${nomorAntri}`);
    getOrder(nomorAntri, function (details) {
        console.log(`pesanan anda adalah ${order.menu1}`);
    });
});
