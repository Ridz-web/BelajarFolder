/** @format */

console.log(document.title);
document.title = "belajar javascript";
const body = document.body;
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

const defaultText = "button3";
btn3.textContent = defaultText;

btn.style.border = "none";
btn.style.background = "red";
btn.style.padding = "5px";

function tes() {
    alert("heyho");
}
function gantiWarna() {
    btn2.style.background = "blue";
    btn2.style.padding = "10px";
}
function ubahText() {
    btn3.textContent = "hahaha";
}
function oriText() {
    btn3.textContent = defaultText;
}
