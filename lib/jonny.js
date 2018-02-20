'use strict';

const tryCatch = require('try-catch');

const {
    parse,
    stringify,
} = JSON;

module.exports.parse = (...args) => {
    const [e, data] = tryCatch(parse, ...args);
    
    return data;
};

module.exports.stringify = (...args) => {
    const [e, data] = tryCatch(stringify, ...args)
    
    return data;
};

