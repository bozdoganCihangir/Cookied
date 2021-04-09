const { cookied } = require("../dist/index.js");

const largeCookie =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiX2lkIjoiNjA2NDJjNDFkMDM2NWY5NzE3ZTE3NmNiIiwidXNlcm5hbWUiOiJDaWhhbmdpciBCb3pkb2dhbiIsImVtYWlsIjoiYm96ZG9nYW4uY2loYW5naXJAZ21haWwuY29tIiwiYXZhdGFyIjoiaHR0cHM6Ly9saDUuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1OQmNwdWp6bHB4NC9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BTVp1dWNuVGxvbVRLUXZLUHpQeUVkQk9XV3NPNnNMNnhRL3M5Ni1jL3Bob3RvLmpwZyIsInB1cmNoYXNlZF9yZXBvcnRzIjp7fSwidXBsb2FkZWRfcmVwb3J0cyI6e30sImN1cnJlbnRfbWVtYmVyc2hpcCI6e30sInB1cmNoYXNlZF9ndWlkZXMiOnt9LCJkYXRlIjoiMjAyMS0wMy0zMVQwODowMTowNS42MDZaIiwiX192IjowLCJpYXQiOjE2MTc4NTc4NTEsImV4cCI6MTYxOTY1Nzg1MX0.TsNefy2YYvHr_wk7XzJ19DNYLTTdWliPTxw3lULWE24eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiX2lkIjoiNjA2NDJjNDFkMDM2NWY5NzE3ZTE3NmNiIiwidXNlcm5hbWUiOiJDaWhhbmdpciBCb3pkb2dhbiIsImVtYWlsIjoiYm96ZG9nYW4uY2loYW5naXJAZ21haWwuY29tIiwiYXZhdGFyIjoiaHR0cHM6Ly9saDUuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1OQmNwdWp6bHB4NC9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BTVp1dWNuVGxvbVRLUXZLUHpQeUVkQk9XV3NPNnNMNnhRL3M5Ni1jL3Bob3RvLmpwZyIsInB1cmNoYXNlZF9yZXBvcnRzIjp7fSwidXBsb2FkZWRfcmVwb3J0cyI6e30sImN1cnJlbnRfbWVtYmVyc2hpcCI6e30sInB1cmNoYXNlZF9ndWlkZXMiOnt9LCJkYXRlIjoiMjAyMS0wMy0zMVQwODowMTowNS42MDZaIiwiX192IjowLCJpYXQiOjE2MTc4NTc4NTEsImV4cCI6MTYxOTY1Nzg1MX0.TsNefy2YYvHr_wk7XzJ19DNYLTTdWliPTxw3lULWE24J9.eyJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiX2lkIjoiNjA2NDJjNDFkMDM2NWY5NzE3ZTE3NmNiIiwidXNlcm5hbWUiOiJDaWhhbmdpciBCb3pkb2dhbiIsImVtYWlsIjoiYm96ZG9nYW4uY2loYW5naXJAZ21haWwuY29tIiwiYXZhdGFyIjoiaHR0cHM6Ly9saDUuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1OQmNwdWp6bHB4NC9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BTVp1dWNuVGxvbVRLUXZLUHpQeUVkQk9XV3NPNnNMNnhRL3M5Ni1jL3Bob3RvLmpwZyIsInB1cmNoYXNlZF9yZXBvcnRzIjp7fSwidXBsb2FkZWRfcmVwb3J0cyI6e30sImN1cnJlbnRfbWVtYmVyc2hpcCI6e30sInB1cmNoYXNlZF9ndWlkZXMiOnt9LCJkYXRlIjoiMjAyMS0wMy0zMVQwODowMTowNS42MDZaIiwiX192IjowLCJpYXQiOjE2MTc4NTc4NTEsImV4cCI6MTYxOTY1Nzg1MX0.TsNefy2YYvHr_wk7XzJ19DNYLTTdWliPTxw3lULWE24eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiX2lkIjoiNjA2NDJjNDFkMDM2NWY5NzE3ZTE3NmNiIiwidXNlcm5hbWUiOiJDaWhhbmdpciBCb3pkb2dhbiIsImVtYWlsIjoiYm96ZG9nYW4uY2loYW5naXJAZ21haWwuY29tIiwiYXZhdGFyIjoiaHR0cHM6Ly9saDUuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1OQmNwdWp6bHB4NC9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BTVp1dWNuVGxvbVRLUXZLUHpQeUVkQk9XV3NPNnNMNnhRL3M5Ni1jL3Bob3RvLmpwZyIsInB1cmNoYXNlZF9yZXBvcnRzIjp7fSwidXBsb2FkZWRfcmVwb3J0cyI6e30sImN1cnJlbnRfbWVtYmVyc2hpcCI6e30sInB1cmNoYXNlZF9ndWlkZXMiOnt9LCJkYXRlIjoiMjAyMS0wMy0zMVQwODowMTowNS42MDZaIiwiX192IjowLCJpYXQiOjE2MTc4NTc4NTEsImV4cCI6MTYxOTY1Nzg1MX0.TsNefy2YYvHr_wk7XzJ19DNYLTTdWliPTxw3lULWE24";

describe("Set cookie", () => {
    beforeEach(() => {
        cookied.clear();
    });

    test("can set cookie with no options", () => {
        cookied.set("foo", "bar");
        expect(cookied.get("foo")).toEqual("bar");
    });

    test("can set cookie with empty options", () => {
        cookied.set("foo", "bar", {});
        expect(cookied.get("foo")).toEqual("bar");
    });

    test("can set cookie with expiration", () => {
        cookied.set("foo", "bar", {
            expires: "5d",
        });
        expect(cookied.get("foo")).toEqual("bar");
    });

    test("throws error for large cookie", () => {
        expect(() =>
            cookied.set("foo", largeCookie + largeCookie)
        ).toThrowError(
            new Error("foo exceeds browsers maximum size per cookie limit")
        );
    });
});

describe("Get cookie", () => {
    beforeEach(() => {
        cookied.clear();
    });

    test("can get existing cookie", () => {
        cookied.set("foo", "bar");
        expect(cookied.get("foo")).toEqual("bar");
    });

    test("return undefined for non-existing cookie", () => {
        expect(cookied.get("foo")).toBeUndefined();
    });
});

describe("Clear all cookies", () => {
    cookied.set("foo", "bar");
    cookied.set("baz", "qux");

    test("clears cookies", () => {
        cookied.clear();
        expect(document.cookie).toBe("");
    });
});

describe("List all cookies", () => {
    test("Lists cookies", () => {
        cookied.set("foo", "bar");
        cookied.set("baz", "qux");
        const expected = [{ foo: "bar" }, { baz: "qux" }];
        const received = cookied.list();
        expect(received).toMatchObject(expected);
    });

    test("returns empty array", () => {
        cookied.clear();
        const received = cookied.list();
        expect(received.length).toBe(0);
    });
});

describe("Delete a cookie", () => {
    test("deletes a cookie", () => {
        cookied.set("foo", "bar");
        cookied.delete("foo");
        expect(cookied.get("foo")).toBeUndefined();
    });
});

describe("Updates a cookie", () => {
    beforeEach(() => {
        cookied.clear();
    });

    test("can update cookie with no options", () => {
        cookied.update("foo", "bar");
        expect(cookied.get("foo")).toEqual("bar");
    });

    test("can update cookie with empty options", () => {
        cookied.update("foo", "bar", {});
        expect(cookied.get("foo")).toEqual("bar");
    });

    test("can update cookie expiration", () => {
        cookied.update("foo", "bar", {
            expires: "5d",
        });
        expect(cookied.get("foo")).toEqual("bar");
    });

    test("throws error for large cookie", () => {
        expect(() =>
            cookied.update("foo", largeCookie + largeCookie)
        ).toThrowError(
            new Error("foo exceeds browsers maximum size per cookie limit")
        );
    });
});
