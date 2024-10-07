/** @format */

const token = ~~[Math.random() * 12345678];

const pictures = ["1.jpg", "2jpg", "3jpg"];

function login(userName, callback) {
    console.log("Processing data...");
    setTimeout(() => {
        callback({ token, userName });
    }, 700);
}

function getUser(token, callback) {
    console.log("processing apiKey....");
    if (token) {
        setTimeout(() => {
            callback({ apiKey: "xapi123" });
        }, 900);
    }
}
function getPictures(apiKey, callback) {
    console.log("processing picture....");
    if (apiKey)
        setTimeout(() => {
            callback({ pictures });
        }, 1600);
}

login("Ridho budi", function (response) {
    const token = response;
    console.log("processing success =>", token);
    getUser(token, function (response) {
        const apiKey = response;
        console.log("get apiKey", apiKey);
        const pic = getPictures(apiKey, function (response) {
            console.log("get picture", pictures);
        });
    });
});
