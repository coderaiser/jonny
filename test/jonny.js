'use strict';

const test = require('tape');
const jonny = require('..');

test('jonny: parse', (t) => {
    const fn = () => jonny.parse('hello');
    
    t.doesNotThrow(fn, 'should not throw');
    t.end();
});

test('jonny: stringify', (t) => {
    const obj = {};
    obj.a = {
        obj
    };
    
    const fn = () => jonny.stringify(obj);
    
    t.doesNotThrow(fn, 'should not throw');
    t.end();
});

