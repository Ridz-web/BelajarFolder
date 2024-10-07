/** @format */

const tasks = document.getElementById("inputBox");
const ull = document.getElementById("list");

function add() {
    if (tasks.value === "") {
        alert("masukkan data");
    } else {
        const list = document.createElement("li");
        list.innerHTML = tasks.value;
        ull.appendChild(list);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        list.appendChild(span);
    }
    tasks.value = "";
    saveData();
}

ull.addEventListener(
    "click",
    function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    },
    false
);
function saveData() {
    localStorage.setItem("data", ull.innerHTML);
}
function showData() {
    ull.innerHTML = localStorage.getItem("data");
}
showData();
