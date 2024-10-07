/** @format */

const waifuSaya = ["Kurumi", "Mahiru", "tohka", "Ninym", "Asuna"];

for (let waifu of waifuSaya) {
    console.log("ini of", waifu);
}
for (let waifu in waifuSaya) {
    console.log("ini in", waifu);
}
waifuSaya.forEach((waifu, index) => {
    // forEach bisa diganti jadi map
    console.log(waifu, index); //memunculkan nama waifu dan urutan index
});
