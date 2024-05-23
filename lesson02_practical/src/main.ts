let myName: string;
let meaningOfLife: number;
let isLoading: boolean;
let album: string;

myName = '42';
meaningOfLife = 42;
isLoading = true;

const sum = (a: number, b: number) => {
    return a + b;
}

let a = 5;
let b = 20;
let result = sum(a, b);
console.log(`${a} + ${b} = ` + result);

let postID: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;