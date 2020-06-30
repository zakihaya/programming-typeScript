console.log('Hello TypeScript')

let a = 1 + 2
let b = a + 3
let c = {
  apple: a,
  banana: b,
}
let d = c.apple * 4

let h: {[key: string]: number} = {}
h.test = 100
h[3] = 4  // Type '"a"' is not assignable to type 'number'.
console.log(h.test)
console.log(h.test2)

type ColorVal = string
const red: ColorVal = 'red'
console.log(red)

let l: unknown
l = 1
if (typeof l === 'number') {
  const m = l * 2
  console.log(m)
}
