# Cookied - JavaScript client cookie manager

Cookied is a tiny browser javascript library that helps managing browser cookies slightly easier. 

Npm https://www.npmjs.com/package/manage-client-cookie

## Usage

Install the package from npm

`npm i manage-client-cookie`

Works right out of the box, export and start using it:

##### Set cookie

```js
import { cookied } from "manage-client-cookie";

// basic
cookied.set("key", "value");

// expires in 5 days
cookied.set("key", "value", {
    expires: "5d",
});

// expires in 12 hours
cookied.set("key", "value", {
    expires: "12h",
});
```

##### Available methods

```js
// set a cookie
cookied.set("key", "value");

// delete a cookie
cookied.delete("key");

// update a cookie
cookied.update("key", "value");

// update a cookie with options
cookied.update("key", "value", {
    /* options */
});

// list all cookies
cookied.list();

// delete all the cookies
cookied.clear();
```

## Tips

-   Remember, you can only set `string` as cookie value.
-   Cookie will auto-expire when the browser close unless you set an expiration date.
-   Cookies are designed for small storage purpose. Google Chrome and Opera provide the largest "maximum-size-per-cookie" storage (18040 bytes), and the lowest is Android (5040 bytes).

## Contributing

If you can, please contribute by reporting issues, discussing ideas, or submitting pull requests with patches and new features. I do my best to respond to all issues and pull requests within a day or two. Thanks
