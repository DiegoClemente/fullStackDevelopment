console.log("example 1: ")
let x = 3;
setTimeout(() => x = x + 4, 1000);
console.log(x);
// output: 3

console.log("\n example 2: ");
function double(value) {
    setTimeout(() => setTimeout(console.log, 0, value * 2), 1000);
}

double(3);
// output: 6