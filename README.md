# Jonny

Work with json without exeptions.

## Install

```
npm i jonny --save
```

## How to use?

```js
const jonny = require('jonny');

jonny.parse('hello');
// returns
undefined

const obj = {};
obj.a = obj;

jonny.stringify(obj, 0, 4));
// returns
undefined
```

## Environments

In old `node.js` environments that supports `es5` only, `jonny` could be used with:

```js
var jonny = require('jonny/legacy');
```

## License

MIT
