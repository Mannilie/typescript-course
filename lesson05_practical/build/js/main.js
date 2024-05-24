"use strict";
// Convert to more or less specific
// Note : Manny : You can type cast by using the 'as' keyword.
let a = 'hello';
let b = a; // Less specific
let c = a; // More specific
// Note : Manny : You can also type cast by using the '<>' operators
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Be careful! TS sees no pronlem - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string
10;
// The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
