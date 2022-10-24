function somaValores(x) {
    return function(y) {
      return x + y;
    };
}
 
var soma5 = somaValores(5); 
 
console.log(soma5(2));

console.log('Segundo exemplo: ')

function makeAdder(x) {
    return function (y) {
      return x + y;
    };
}
  
const add5 = makeAdder(30);
const add10 = makeAdder(10);
  
console.log(add5(2)); // 32
console.log(add10(2)); // 12
  