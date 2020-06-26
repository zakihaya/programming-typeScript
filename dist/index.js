"use strict";
console.log('Hello TypeScript');
let a = 1 + 2;
let b = a + 3;
let c = {
    apple: a,
    banana: b,
};
let d = c.apple * 4;
let h = {};
h.test = 100;
h[3] = 4; // Type '"a"' is not assignable to type 'number'.
console.log(h.test);
console.log(h.test2);
const red = 'red';
console.log(red);
let l;
l = 1;
if (typeof l === 'number') {
    const m = l * 2;
    console.log(m);
}
//# sourceMappingURL=index.js.map