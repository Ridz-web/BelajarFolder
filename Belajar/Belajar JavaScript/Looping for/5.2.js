/** @format */

for (let z = 1; z <= 5; z++) {
    if (z % 2 !== 0) console.log("data ke -", z);
}

let x = 1;
while (x <= 10) {
    if (x % 2 !== 0) {
        console.log("data x ke-", x);
    }
    x++;
}
let y = 1;
do {
    if (y % 2 == 0) {
        console.log("data y ke-", y);
    }
    y++;
} while (y <= 10);
