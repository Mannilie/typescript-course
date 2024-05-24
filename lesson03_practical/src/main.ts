let stringArr = ['one', 'hey', 'Manny'];

let guitars = ['Strat', 'Les Paul', 5150];

let mixedData = ['EVH', 1984, true];

stringArr[0] = 'John';
stringArr.push('hey');

guitars[0] = 1984;
guitars.unshift('Jim');

guitars = stringArr;

let test = [];
let bands: string[] = [];
bands.push('Van Halen');

// Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true];

let mixed = ['John', 1, false];

myTuple[0] = '42';

// Objects
let myObj: object = {};
myObj = [];
console.log(typeof(myObj));