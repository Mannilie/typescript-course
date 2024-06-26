type One = string;
type Two = string | number;
type Three = 'hello';

// Convert to more or less specific
// Note : Manny : You can type cast by using the 'as' keyword.
let a: One = 'hello';
let b = a as Two; // Less specific
let c = a as Three; // More specific

// Note : Manny : You can also type cast by using the '<>' operators
let d = <One>'world';
let e = <string | number>'world';

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b;
    return '' + a + b;
};

let myVal: string = addOrConcat(2, 2, 'concat') as string;

// Be careful! TS sees no pronlem - but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number;

// 10 as string
(10 as unknown) as string;

// The DOM
const img = document.querySelector('img')!;
const myImg = document.getElementById('#img') as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById('#img');