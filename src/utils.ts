import { BROWSER_PER_COOKIE_BYTE_LIMIT } from "./constants";
import { CookieOptions } from "./interfaces";

export const convertToByte = (val: string) => {
    const matches = encodeURIComponent(val).match(/%[89ABab]/g);
    return val.length + (matches ? matches.length : 0);
};

export const validate = (value: any): boolean => {
    const byte = convertToByte(value);
    return byte > BROWSER_PER_COOKIE_BYTE_LIMIT ? true : false;
};

export const calcExpire = (expire: string): string => {
    let time = 0;
    const now = new Date();
    const indicator = expire.split("")[expire.length - 1];
    const duration = parseInt(expire.substring(0, expire.length - 1), 10);

    // hour
    if (indicator === "h") {
        time = 60 * 60 * 1000 * duration;
    }

    // day
    if (indicator === "d") {
        time = 24 * 60 * 60 * 1000 * duration;
    }

    now.setTime(now.getTime() + time);
    return now.toUTCString();
};

export const buildCookie = (cookie: string, options: CookieOptions): string => {
    if (options.expires) {
        cookie += ";" + "expires=" + calcExpire(options.expires);
    }

    if (options.domain) {
        cookie += ";" + "domain=" + options.domain;
    }

    if (options.path) {
        cookie += ";" + "path=" + options.path;
    }

    if (options.secure) {
        cookie += ";" + "secure";
    }
    return cookie;
};
