/** @format */

console.log(document.title);
document.title = "belajar javascirpt";

const body = document.body;
body.append("hello world");

const h1 = document.createElement("h1");
h1.textContent = "<marquee>ANJAY INI h1</marquee>";

const namaSaya = document.createElement("p");
namaSaya.innerHTML = "<marquee>INI PARAGRAPH</marquee>";

const Saya = document.createElement("p");
Saya.innerText = "<marquee>INI PARAGRAPH2</marquee>";

body.append(h1);
body.append(namaSaya);
body.append(Saya);
