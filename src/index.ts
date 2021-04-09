import { Options } from "./ICookie";
import { validate, buildCookie } from "./utils";

export const cookie = {
    set(name: string, value: string, options?: Options): void {
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

    get(name: string): string | undefined {
        const cookies = document.cookie
            .split(";")
            .map((cookie) => cookie.trim());
        const cookie = cookies.find((cookie) => cookie.split("=")[0] === name);
        if (cookie) {
            return cookie.split("=")[1];
        }
    },
};
