export interface IOptions {
    path?: string;
    domain?: string;
    expires?: any;
    secure?: boolean;
}

export interface ICookies {
    set(name: string, value: any, options?: IOptions): void;

    // (key: string, value?: any, options?: IOptions): any;

    // get(key: string): string;
    // expire(key: string, options?: IOptions): ICookie;

    // defaults: IOptions;
    // enabled: boolean;
}
