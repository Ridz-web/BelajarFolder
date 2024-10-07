/** @format */

let s = "";
for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= i; j++) {
        s += "     *";
    }
    s += "\n";
    if (i == 10) {
        for (let o = 10; o > 0; o--) {
            for (let f = 0; f < o; f++) {
                s += "     *";
            }
            s += "\n";
        }
    }
}

console.log(s);
