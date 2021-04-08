import { ICookies, IOptions } from "./ICookie";

class Cookies implements ICookies {
    public set(name: string, value: any, options?: IOptions): void {
        let cookie = name + "=" + value;

        if (
            !options ||
            Object.keys(options).length < 1 ||
            options.constructor !== Object
        ) {
            document.cookie = cookie;
            return;
        }

        if (options.expires) {
            cookie += ";" + "expires=" + this.calcExpire(options.expires);
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
        document.cookie = cookie;
    }

    private calcExpire(expire: string): string {
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
    }
}

const cookie = new Cookies();
export { cookie };


