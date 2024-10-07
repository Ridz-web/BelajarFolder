/** @format */

const p = document.createElement("p");
const textBaru = document.createTextNode("ini dibuat menggunakan javascript");
p.appendChild(textBaru);

const sectionA = document.getElementById("a");
sectionA.appendChild(p);

const liBaru = document.createElement("li");
const textLi = document.createTextNode("list JavaScript");
liBaru.appendChild(textLi);

const ul = document.querySelector("section#b ul");
const li = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li);

const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2 = document.createElement("h2");
const h2Text = document.createTextNode("Judul JavaScript");
h2.appendChild(h2Text);
sectionB.replaceChild(h2, p4);
