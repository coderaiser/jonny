'use strict';

const tryCatch = require('try-catch');

const {
    parse,
    stringify,
} = JSON;

module.exports.parse = (...args) => {
    const [, data] = tryCatch(parse, ...args);
    
    return data;
};

module.exports.stringify = (...args) => {
    const [, data] = tryCatch(stringify, ...args)
    
    return data;
};

