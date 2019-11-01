# Eventually for TypeScript.

[WebdriverIO](https://webdriver.io/)'s `waitUntil()` doesn't work with TypeScript. This project provide same function as `eventually()`.

## How to use
Just call your function in `eventually(() => f)`
```
eventually(() => throwableFunction("aaa"))
```

You can specify `timeout` and `interval`. The default is `timeout: 10 seconds, interval: 1 second`.

TODO

## TODO list
- Separate directory into Main and Sample
- Register to npm

## How to develop

TODO change to package.json
```
npm install typescript ts-node
```
