// Type Aliases
type stringOrNumber = string | number;
type stringOrNumberArray = stringOrNumber[];

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type UserId = stringOrNumber;

// Literal types
let myName: 'Dave';
let userName: 'Dave' | 'John' | 'Amy';
userName = 'Amy';

// Functions
const add = (a: number, b: number): number => {
    return a + b;
};

const logMsg = (message: any): void => {
    console.log(message);
}

logMsg(`Hello!`);
logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
    return c - d;
};

logMsg(subtract(5, 2));

//type mathFunction = (a: number, b: number) => number;
interface mathFunction {
    (a: number, b: number): number;
}

let multiply: mathFunction = function(c, d) {
    return c * d;
}

logMsg(multiply(2, 2));
