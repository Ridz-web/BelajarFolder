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
                success({ pic: pictures });
            }, 1600);
    });
}
async function userDisplay() {
    try {
        const { token } = await login("Ridho budi");
        const { apiKey } = await getUser(token);
        const { pic } = await getPictures(apiKey);

        console.log(
            `token anda adalah ${token}
          kunci Apikey anda adalah ${apiKey}
          Gambar yang tersedia saat ini ${pic}`
        );
    } catch (err) {
        console.log(err);
    }
}

userDisplay();
