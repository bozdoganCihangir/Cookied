const { cookie } = require("../dist/index.js");
const { getCookie } = require("./helpers");

describe("Set cookie", () => {
    test("can set cookie with no options", () => {
        cookie.set("foo", "bar");
        expect(getCookie("foo")).toEqual("bar");
    });

    test("can set cookie with empty options", () => {
        cookie.set("foo", "bar", {});
        expect(getCookie("foo")).toEqual("bar");
    });

    test("can set cookie with options", () => {
        cookie.set("foo", "bar", {
            path: "/foo",
            domain: "www",
            secure: true,
        });
        expect(getCookie("foo")).toEqual("bar");
    });

    test("can set cookie with expiration", () => {
        cookie.set("foo", "bar", {
            expires: "5d",
        });
        expect(getCookie("foo")).toEqual("bar");
    });
});

// if (typeof window.document !== 'object') {
//     throw new Error('This libary requires a `window` with a `document` object');
// }
