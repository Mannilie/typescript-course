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
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
