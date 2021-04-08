function getCookie(cookieKey) {
    const list = document.cookie.split(";").map((cookie) => cookie.trim());

    for (let i = 0; i < list.length; i++) {
        const cookie = list[i].split("=");
        const key = cookie[0];
        const value = cookie[1];
        if (key === cookieKey) {
            return value;
        }
    }
}

module.exports = {
    getCookie,
};
