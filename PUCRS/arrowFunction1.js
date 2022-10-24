var soma = () => console.log("funcao sem parametros")
soma()
soma(1)

soma = _ => console.log("usando underscore")
soma()

soma = (x, y) => x + y;
console.log(soma(2, 3))

soma = (x, y) => {return x + y};
console.log(soma(5, 5))

soma = (x, y) => x>y?x:y;
console.log(soma(5, 6))

soma = (x, y) => { 
    if(x>y)
        return x 
    else
        return y 
}

console.log(soma(10, 2))
