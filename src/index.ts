import { Options } from "./ICookie";
import { validate, buildCookie, isEmpty } from "./utils";

const cookie = {
    set(name: string, value: any, options?: Options): void {
        const exceeds = validate(value);
        if (exceeds) {
            throw new Error(
                `${name} exceeds browsers maximum size per cookie limit`
            );
        }

        const base = name + "=" + value;
        if (isEmpty(options)) {
            document.cookie = base;
            return;
        }

        document.cookie = buildCookie(base, options as Options);
    },
};

export { cookie };
