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

type mathFunction = (a: number, b: number) => number;
//interface mathFunction {
//    (a: number, b: number): number;
//}

let multiply: mathFunction = function(c, d) {
    return c * d;
}

logMsg(multiply(2, 2));

const addAll = (a: number, b: number, c?: number): number => {
    if(typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};

// default param value
const sumAll = (a: number = 2, b: number, c: number = 2): number => {
    return a + b + c;
}

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));

logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));

// Rest parameters
const total = (a: number, ... nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr);
}

logMsg(total(1, 2, 3, 4));

const createError = (errMsg: string): never => {
    throw new Error(errMsg);
}

const infinite = () => {
    let i: number = 1;
    while(true) {
        i++;
        if(i > 100)
            break;
    }
}

const isString = (value: any): boolean => {
    return typeof value === 'string'
        ? true : false;
}

const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ? true : false;
}

const numberOrString = (value: number | string): string => {
    if (isString(value)) return 'string';
    if (isNumber(value)) return 'number';
    return createError('This should never happen!');
}

// Extra
// I wrote a method for adding multiple optional arguments via params syntax
const addAllParams = (... params : number[]): number => {
    let result: number = 0;
    for (let i = 0; i < params.length; i++) {
        result += params[i];
    }
    return result;
}

logMsg(addAllParams(2, 3, 4, 5, 6, 7));