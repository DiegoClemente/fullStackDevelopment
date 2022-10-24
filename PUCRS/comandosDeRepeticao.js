console.log("======= FOR ======")
for (var i =0; i < 9; i++){
    console.log(i);
}

var n = 0;
var x = 0;

while (n < 3){
    n++;
    x += n;
}
console.log("======= while ======")
console.log(n)
console.log(x)

var result = '';
var i = 0;
do {
    i += 1;
    result += i + ' ';
}
while (i > 0 && i < 5);

console.log("======= do ======")
console.log(result)
console.log(i)
