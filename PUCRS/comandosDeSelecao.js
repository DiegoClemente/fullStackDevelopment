var foo = 0;
switch(foo) {
    case -1:
        console.log('negative 1');
        break;
    case 0:
        console.log(0); // nao tem break por isso vai pro proximo case
    case 1:
        console.log(1); // a ultima execucao do programa aqui!
        break;
    case 2:
        console.log(2);
        break;
    default:
        console.log('default');    
}

console.log("==== NEXT =====")
// condition ? exprIfTrue : exprIfFalse

var age = 26;
var beverage = (age >= 21) ? "Beer" : 'Juice';
console.log(beverage);