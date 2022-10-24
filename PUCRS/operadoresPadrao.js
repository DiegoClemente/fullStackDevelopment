console.log("=== incremento =====");
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// expected output: "a:4, b:4"

console.log("=== decremento ===");

let c = 3;
const d = c--;

console.log(`c:${c}, d:${d}`);
// expected output: "c:2, d:3"

let e = 3;
const f = --e;

console.log(`e:${e}, f:${f}`);
// expected output: "e:2, f:2"

console.log("=== Adicao ===");

console.log(2 + 2);
// expected result: 4

console.log(2 + true);
// expected result: 3

console.log('hello ' + 'everyone');
// expected result: "hello everyone"

console.log(2001 + ': A Space Odyssey');
// expected result: "2001: A Space Odyssey"

console.log("=== Subtracao ===");

console.log(5 - 3);
// expected output: 2

console.log(3.5 - 5);
// expected output: -1.5

console.log(5 - 'hello');
// expected output: NaN

console.log(5 - true);
// expected output: 4

console.log("=== Divisao ===");

console.log(12 / 2);
// expected output: 6

console.log(3 / 2);
// expected output: 1.5

console.log(6 / '3');
// expected output: 2

console.log(2 / 0);
// expected output: Infinity

console.log("=== Multiplicacao ===");

console.log(3 * 4);
// expected output: 12

console.log(-3 * 4);
// expected output: -12

console.log('3' * 2);
// expected output: 6

console.log('foo' * 2);
// expected output: NaN

console.log("=== Resto Divisao ===");

console.log(13 % 5);
// expected output: 3

console.log(-13 % 5);
// expected output: -3

console.log(4 % 2);
// expected output: 0

console.log(-4 % 2);
// expected output: -0

console.log("=== Exponencial ===");

console.log(3 ** 4);
// expected output: 81

console.log(10 ** -2);
// expected output: 0.01

console.log(2 ** 3 ** 2);
// expected output: 512

console.log((2 ** 3) ** 2);
// expected output: 64

console.log("=== Estritamente igual ===");

console.log(1 == 1);
// expected output: true

console.log('hello' == 'hello');
// expected output: true

console.log('1' ==  1);
// expected output: true

console.log(0 == false);
// expected output: true

console.log("=== Diferente ===");

console.log(1 != 1);
// expected output: false

console.log('hello' != 'hello');
// expected output: false

console.log('1' !=  1);
// expected output: false

console.log(0 != false);
// expected output: false

console.log("=== Menor ===");

console.log(5 < 3);
// expected output: false

console.log(3 < 3);
// expected output: false

// Compare bigint to number (note: bigint is not supported in all browsers)
console.log(3n < 5);
// expected output: true

console.log('aa' < 'ab');
// expected output: true

console.log("=== Menor ou igual ===");

console.log(5 <= 3);
// expected output: false

console.log(3 <= 3);
// expected output: true

// Compare bigint to number (note: bigint is not supported in all browsers)
console.log(3n <= 5);
// expected output: true

console.log('aa' <= 'ab');
// expected output: true

console.log("=== Maior ===");

console.log(5 > 3);
// expected output: true

console.log(3 > 3);
// expected output: false

// Compare bigint to number (note: bigint is not supported in all browsers)
console.log(3n > 5);
// expected output: false

console.log('ab' > 'aa');
// expected output: true

console.log("=== Maior ou igual ===");

console.log(5 >= 3);
// expected output: true

console.log(3 >= 3);
// expected output: true

// Compare bigint to number (note: bigint is not supported in all browsers)
console.log(3n >= 5);
// expected output: false

console.log('ab' >= 'aa');
// expected output: true

console.log("=== AND ===");

const g = 3;
const h = -2;

console.log(g > 0 && h > 0);
// expected output: false

console.log("=== OR ===");

const i = 3;
const j = -2;

console.log(i > 0 || j > 0);
// expected output: true