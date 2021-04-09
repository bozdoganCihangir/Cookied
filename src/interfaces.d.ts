export interface CookiesList {
    [x: string]: string;
}

export interface CookieOptions {
    path?: string;
    domain?: string;
    expires?: any;
    secure?: boolean;
}
