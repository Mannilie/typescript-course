"use strict";
// Literal types
let myName;
let userName;
userName = 'Amy';
// Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg(`Hello!`);
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
logMsg(subtract(5, 2));
//interface mathFunction {
//    (a: number, b: number): number;
//}
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default param value
const sumAll = (a = 2, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// Rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
const isString = (value) => {
    return typeof value === 'string'
        ? true : false;
};
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
const numberOrString = (value) => {
    if (isString(value))
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
// Extra
// I wrote a method for adding multiple optional arguments via params syntax
const addAllParams = (...params) => {
    let result = 0;
    for (let i = 0; i < params.length; i++) {
        result += params[i];
    }
    return result;
};
logMsg(addAllParams(2, 3, 4, 5, 6, 7));
