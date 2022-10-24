array = [4, 5, 6, 7, 8]

console.log("USANDO SOME\n")
regraImpar = (item) => item%2 == 1;
console.log("Ha algum numero impar? " +array.some(regraImpar)) 
// expected output: true

regraPrimo = (item) => {
    let ndiv=0;
    for(let divisor=1; divisor<=item; divisor++)
        if((item%divisor)== 0) 
            ndiv++
    if(ndiv==2) 
        return true
    else
        return false
}

console.log("Há algum número primo? "+ array.some(regraPrimo))
// expected output: true

console.log("USANDO EVERY\n")

array = [4,5,6,7,8,9,10] 

regraImpar = (item) => item%2 != 0
console.log("Todos os números que são impar? " +array.every(regraImpar))
// expected output: false

regraPrimo = (item) => {
    let ndiv=0;
    for(let divisor=1; divisor<=item; divisor++)
        if((item%divisor)== 0) 
            ndiv++
    if(ndiv==2) 
        return true
    else
        return false
}

console.log("Todos os número sao primos? "+ array.every(regraPrimo))
// expected output: false

console.log("USANDO FILTER\n")

array = [4,5,6,7,8,9,10]

regraImpar = (item) => item%2 != 0
console.log("Filtrar numeros impares: " +array.filter(regraImpar))
// expected output: 5,7,9

regraPrimo = (item) => {
    let ndiv=0;
    for(let divisor=1; divisor<=item; divisor++)
        if((item%divisor)== 0) 
            ndiv++
    if(ndiv==2) 
        return true
    else
        return false
}

console.log("Filtrar os números primos? " +array.filter(regraPrimo))
// expected output: 5, 7

console.log("USANDO FOREACH\n")

array = [4,5,6,7,8,9,10]

array.forEach(
    (nro) => console.log(
        nro+
        " -> "+
        (nro%2==0?"par":"ímpar"))
)

console.log("USANDO REDUCE\n")

array = [4,5,6,7,8,9,10]

let resultado = 
    array.reduce(
        (acc, val) => acc+=(val%2==0)?val:0,
        0
)

console.log("A soma dos nros pares é "+resultado)

console.log("USANDO MAP\n")

array = [4,5,6,7,8,9,10]

var newArray = array.map( (item) => item*2 )
console.log(newArray)
newArray = array.map( (item) => {return {x: item, y: 2*item}} ) 
console.log(newArray)

console.log("JUNTANDO TUDO\n")

array = [2,3,4,5,6,7,8,9,10]
nroDivisores = (item) => { 
    let ndiv=0;
    for(let divisor=1; divisor<=item; divisor++) 
        if((item%divisor)== 0)
            ndiv++
    return ndiv;
}

array
.filter((nro) => nroDivisores(nro)==2)
.map((item) => {return {x:item, par:(item%2)==0}} ) 
.forEach((obj) => console.log(obj.x + " é par? " + obj.par))