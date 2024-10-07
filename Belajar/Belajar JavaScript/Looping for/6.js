/** @format */

let waifu = ["Kurumi", "Kaoruko", "Mahiru", "Masha", "Tohka"];
let waifuSaya = {
    waifu1: "Kurumi",
    waifu2: "Kaoruko",
    waifu3: "Mahiru",
    waifu4: "Masha",
    waifu5: "Tohka"
};
//for of untuk looping array
for (let item of waifu) {
    console.log(`${item} \n ini for of untuk array`);
}

//for in untuk looping sebuah object
for (let saya in waifuSaya) {
    console.log(`${saya} : ${waifuSaya[saya]}\n ini for in untuk object`);
}
