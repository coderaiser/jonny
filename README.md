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

## License

MIT
