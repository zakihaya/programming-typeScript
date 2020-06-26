function add(a: number, b: number): number {
  return a + b
}

console.log(add(10, 20))

// applyは第1引数を関数内のthisにバインドし、2番目の引数を関数のパラメータとして展開する
console.log(add.apply(null, [10, 20]))

// callもapplyと同様の事をするが、引数を展開する代わりに、順番に適用する
console.log(add.call(null, 10, 20))

// bindも、thisと引数のリストを関数にバインドするのは同じ
// callと違うのは、関数を呼び出さずに新しい関数を返してくる
// そのため、開発者は()、.call、.applyを使って関数を呼び出す必要がある
console.log(add.bind(null, 10, 20)())
