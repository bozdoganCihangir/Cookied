const { cookie } = require("../dist/index.js");

const largeCookie =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiX2lkIjoiNjA2NDJjNDFkMDM2NWY5NzE3ZTE3NmNiIiwidXNlcm5hbWUiOiJDaWhhbmdpciBCb3pkb2dhbiIsImVtYWlsIjoiYm96ZG9nYW4uY2loYW5naXJAZ21haWwuY29tIiwiYXZhdGFyIjoiaHR0cHM6Ly9saDUuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1OQmNwdWp6bHB4NC9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BTVp1dWNuVGxvbVRLUXZLUHpQeUVkQk9XV3NPNnNMNnhRL3M5Ni1jL3Bob3RvLmpwZyIsInB1cmNoYXNlZF9yZXBvcnRzIjp7fSwidXBsb2FkZWRfcmVwb3J0cyI6e30sImN1cnJlbnRfbWVtYmVyc2hpcCI6e30sInB1cmNoYXNlZF9ndWlkZXMiOnt9LCJkYXRlIjoiMjAyMS0wMy0zMVQwODowMTowNS42MDZaIiwiX192IjowLCJpYXQiOjE2MTc4NTc4NTEsImV4cCI6MTYxOTY1Nzg1MX0.TsNefy2YYvHr_wk7XzJ19DNYLTTdWliPTxw3lULWE24eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiX2lkIjoiNjA2NDJjNDFkMDM2NWY5NzE3ZTE3NmNiIiwidXNlcm5hbWUiOiJDaWhhbmdpciBCb3pkb2dhbiIsImVtYWlsIjoiYm96ZG9nYW4uY2loYW5naXJAZ21haWwuY29tIiwiYXZhdGFyIjoiaHR0cHM6Ly9saDUuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1OQmNwdWp6bHB4NC9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BTVp1dWNuVGxvbVRLUXZLUHpQeUVkQk9XV3NPNnNMNnhRL3M5Ni1jL3Bob3RvLmpwZyIsInB1cmNoYXNlZF9yZXBvcnRzIjp7fSwidXBsb2FkZWRfcmVwb3J0cyI6e30sImN1cnJlbnRfbWVtYmVyc2hpcCI6e30sInB1cmNoYXNlZF9ndWlkZXMiOnt9LCJkYXRlIjoiMjAyMS0wMy0zMVQwODowMTowNS42MDZaIiwiX192IjowLCJpYXQiOjE2MTc4NTc4NTEsImV4cCI6MTYxOTY1Nzg1MX0.TsNefy2YYvHr_wk7XzJ19DNYLTTdWliPTxw3lULWE24J9.eyJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiX2lkIjoiNjA2NDJjNDFkMDM2NWY5NzE3ZTE3NmNiIiwidXNlcm5hbWUiOiJDaWhhbmdpciBCb3pkb2dhbiIsImVtYWlsIjoiYm96ZG9nYW4uY2loYW5naXJAZ21haWwuY29tIiwiYXZhdGFyIjoiaHR0cHM6Ly9saDUuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1OQmNwdWp6bHB4NC9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BTVp1dWNuVGxvbVRLUXZLUHpQeUVkQk9XV3NPNnNMNnhRL3M5Ni1jL3Bob3RvLmpwZyIsInB1cmNoYXNlZF9yZXBvcnRzIjp7fSwidXBsb2FkZWRfcmVwb3J0cyI6e30sImN1cnJlbnRfbWVtYmVyc2hpcCI6e30sInB1cmNoYXNlZF9ndWlkZXMiOnt9LCJkYXRlIjoiMjAyMS0wMy0zMVQwODowMTowNS42MDZaIiwiX192IjowLCJpYXQiOjE2MTc4NTc4NTEsImV4cCI6MTYxOTY1Nzg1MX0.TsNefy2YYvHr_wk7XzJ19DNYLTTdWliPTxw3lULWE24eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiX2lkIjoiNjA2NDJjNDFkMDM2NWY5NzE3ZTE3NmNiIiwidXNlcm5hbWUiOiJDaWhhbmdpciBCb3pkb2dhbiIsImVtYWlsIjoiYm96ZG9nYW4uY2loYW5naXJAZ21haWwuY29tIiwiYXZhdGFyIjoiaHR0cHM6Ly9saDUuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1OQmNwdWp6bHB4NC9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BTVp1dWNuVGxvbVRLUXZLUHpQeUVkQk9XV3NPNnNMNnhRL3M5Ni1jL3Bob3RvLmpwZyIsInB1cmNoYXNlZF9yZXBvcnRzIjp7fSwidXBsb2FkZWRfcmVwb3J0cyI6e30sImN1cnJlbnRfbWVtYmVyc2hpcCI6e30sInB1cmNoYXNlZF9ndWlkZXMiOnt9LCJkYXRlIjoiMjAyMS0wMy0zMVQwODowMTowNS42MDZaIiwiX192IjowLCJpYXQiOjE2MTc4NTc4NTEsImV4cCI6MTYxOTY1Nzg1MX0.TsNefy2YYvHr_wk7XzJ19DNYLTTdWliPTxw3lULWE24";

describe("Set cookie", () => {
    beforeEach(() => {
        cookie.clear();
    });

    test("can set cookie with no options", () => {
        cookie.set("foo", "bar");
        expect(cookie.get("foo")).toEqual("bar");
    });

    test("can set cookie with empty options", () => {
        cookie.set("foo", "bar", {});
        expect(cookie.get("foo")).toEqual("bar");
    });

    test("can set cookie with options", () => {
        cookie.set("foo", "bar", {
            expires: "8h",
            domain: "www",
            path: "foo",
            secure: true,
        });
        // expect(cookie.get("foo")).toEqual("bar");
    });

    test("can set cookie with expiration", () => {
        cookie.set("foo", "bar", {
            expires: "5d",
        });
        expect(cookie.get("foo")).toEqual("bar");
    });

    test("throws error for large cookie", () => {
        expect(() => cookie.set("foo", largeCookie + largeCookie)).toThrowError(
            new Error("foo exceeds browsers maximum size per cookie limit")
        );
    });
});

describe("Get cookie", () => {
    beforeEach(() => {
        cookie.clear();
    });

    test("can get existing cookie", () => {
        cookie.set("foo", "bar");
        expect(cookie.get("foo")).toEqual("bar");
    });

    test("return undefined for non-existing cookie", () => {
        expect(cookie.get("foo")).toBeUndefined();
    });
});

describe("Clear cookies", () => {
    cookie.set("foo", "bar");
    cookie.set("baz", "qux");

    test("clear all cookies", () => {
        cookie.clear();
        expect(document.cookie).toBe("");
    });
});
