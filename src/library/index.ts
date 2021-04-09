import { CookieOptions, CookiesList } from "./interfaces";
import { validate, buildCookie } from "./utils";

export const cookied = {
    get(name: string): string | undefined {
        const cookies = document.cookie
            .split(";")
            .map((cookie) => cookie.trim());
        const cookie = cookies.find((cookie) => cookie.split("=")[0] === name);
        if (cookie) {
            return cookie.split("=")[1];
        }
    },

    delete(key: string): void {
        document.cookie = key + "=;expires=Thu, 01 Jan 2000 00:00:00 GMT";
    },

    set(name: string, value: string, options?: CookieOptions): void {
        const exceeds = validate(value);
        if (exceeds) {
            throw new Error(
                `${name} exceeds browsers maximum size per cookie limit`
            );
        }

        const base = name + "=" + value;
        if (
            !options ||
            Object.keys(options).length < 1 ||
            options.constructor !== Object
        ) {
            document.cookie = base;
            return;
        }
        document.cookie = buildCookie(base, options);
    },

    list(): CookiesList[] | [] {
        if (!document.cookie) {
            return [];
        }
        const cookies = document.cookie
            .split(";")
            .map((cookie) => cookie.trim());
        return cookies.map((cookie) => {
            const [key, value] = cookie.split("=");
            return { [key]: value };
        });
    },

    clear(): void {
        document.cookie.split(";").forEach((cookie) => {
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 2000 00:00:00 GMT";
        });
    },

    update(name: string, value: string, options?: CookieOptions): void {
        this.set(name, value, options);
    },
};
