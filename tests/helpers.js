function getCookie(name) {
    const cookies = doc.cookie.split(";").map((cookie) => cookie.trim());
    const cookie = cookies.find((cookie) => cookie.split("=")[0] === name);
    if (cookie) {
        return cookie.split("=")[1];
    }
}

module.exports = {
    getCookie,
};
