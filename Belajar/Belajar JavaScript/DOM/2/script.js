/** @format */

let judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.letterSpacing = "5px";

//jika menggunakan getElementsByTagName maka akan menjadi object/ array

let paragraph = document.getElementsByTagName("p");

//cara 1 manual
// paragraph[0].style.backgroundColor = 'aqua';
// paragraph[1].style.backgroundColor = 'aqua';
// paragraph[2].style.backgroundColor = 'aqua';
// paragraph[3].style.backgroundColor = 'aqua';

//cara 2 menggunakan looping

for (let p = 0; p < paragraph.length; p++) {
    paragraph[p].style.backgroundColor = "aqua";
}

let paragraph1 = document.getElementsByClassName("p1")[0];
paragraph1.innerHTML = "JavaScript";
