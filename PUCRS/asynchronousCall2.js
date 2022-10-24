function double(value, callback) {
    setTimeout(() => callback(value * 2), 1000);
}
double(3, (x) => console.log(`I was given: ${x}`));
// output: I was given: 6