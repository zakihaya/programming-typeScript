console.log('Hello TypeScript')

let a = 1 + 2
let b = a + 3
let c = {
  apple: a,
  banana: b,
}
let d = c.apple * 4

let h: {[key: string]: number} = {}
h['test'] = 100
// h['test2'] = 'a'  // Type '"a"' is not assignable to type 'number'.
console.log(h['test'])
console.log(h['test2'])
