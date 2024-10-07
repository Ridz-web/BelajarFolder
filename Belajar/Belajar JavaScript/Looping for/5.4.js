/** @format */

const x = [3, 5, 12];
let total = 0;
for (let i = 0; i < x.length; i++) {
    console.log("ini for ", x[i]);
    total += x[i];
}
console.log("hasil dari penjumlahan array: ", total);

const y = [3, 5, 12];
let u = 0;
let total2 = 0;
while (u < y.length) {
    console.log("ini while ", y[u]);
    total2 += y[u];
    u++;
}
console.log("hasil penumlahan array:", total2);

const z = [3, 5, 12];
let z1 = 0;
let total3 = 0;
do {
    console.log("ini forwhile", z[z1]);
    total3 += z[z1];
    z1++;
} while (z1 < z.length);
console.log("hasil array:", total3);
