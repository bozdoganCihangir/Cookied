import { CookieOptions } from "./interfaces";

/**
 * Web Browsers Maximum size per cookie
 * Google Chrome 18040 bytes
 * Firefox	15040 bytes
 * Opera 18040 bytes
 * Android	5040 bytes
 */
const BROWSER_PER_COOKIE_BYTE_LIMIT = 5040;

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

    if (indicator === "h") {
        time = 60 * 60 * 1000 * duration;
    }

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

    if (options.secure) {
        cookie += ";" + "secure";
    }
    return cookie;
};
