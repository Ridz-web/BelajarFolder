/** @format */

const token = ~~[Math.random() * 12345678];

const pictures = ["1.jpg", "2jpg", "3jpg"];

function login(userName) {
    console.log("Processing token...");
    return new Promise((success, failed) => {
        setTimeout(() => {
            if (userName != "Ridho budi") failed("Sorry data undefined");
            success({ token });
        }, 700);
    });
}

function getUser(token) {
    console.log("processing apiKey....");
    return new Promise((success, failed) => {
        if (token) {
            setTimeout(() => {
                success({ apiKey: "xApi123" });
            }, 900);
        }
    });
}
function getPictures(apiKey) {
    console.log("processing picture....");
    return new Promise((success, failed) => {
        if (!apiKey) failed("sorry not access!..");
        if (apiKey)
            setTimeout(() => {
                success({ pictures });
            }, 1600);
    });
}
const user = login("Ridho budi");
user.then(function (response) {
    console.log("get token success :", response);
    const { token } = response;
    getUser(token)
        .then(function (response) {
            const { apiKey } = response;
            console.log("get your key", response);
            getPictures(apiKey)
                .then(function (response) {
                    const { pictures } = response;
                    console.log("picture unlocked", response);
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
}).catch(err => console.log(err));
