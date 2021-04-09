declare global {
    interface Window {
        cookied: any;
    }
}

export interface CookiesList {
    [x: string]: string;
}

export interface CookieOptions {
    expires?: any;
    secure?: boolean;
}
