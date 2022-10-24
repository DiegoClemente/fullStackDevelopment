var mySet = new Set();

mySet.add(0);
console.log(mySet);
mySet.add(1);
console.log(mySet);
mySet.add(1);
console.log(mySet);
mySet.add(2);
console.log(mySet);
mySet.add(2);
console.log(mySet);

mySet.add("texto");
console.log(mySet);
var o = {a: 1, b: 2};
mySet.add(o);
console.log(mySet);

console.log(mySet.has(1));
console.log(mySet.has(3));
console.log(mySet.has(5));

console.log(mySet.size);

mySet.delete(1);
console.log(mySet.has(1));

console.log(mySet);