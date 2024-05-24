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
let myObj: object;
myObj = [];
console.log(typeof(myObj));

const exampleObj = {
    prop1: 'Manny',
    prop2: true
};

interface Guitarist {
    name?: string,
    active: boolean,
    albums: (string | number)[]
};

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};

let jp: Guitarist = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello!';
};

console.log(greetGuitarist(jp));

// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime"

enum Grade {
    U,
    D,
    C,
    B,
    A
}

console.log(Grade.U);