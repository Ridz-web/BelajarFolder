/** @format */

//cara 1
const sum = new Function("x", "y", "console.log(x+y)");

//cara 2
function sum2(x, y) {
    console.log(x + y);
}

//cara 3
const sum3 = (x, y) => {
    console.log(x + y);
};
sum(2, 6);
sum2(1, 2);
sum3(3, 6);
