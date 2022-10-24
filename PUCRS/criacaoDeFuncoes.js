hoisted(); // eu chamo a funcao criada abaixo antes de ela existir

function hoisted(){
    console.log("foo");
}

console.log("== segunda funcao ====")

function calc_sales(units_a, units_b, units_c){
    return units_a * 79 + units_b * 129 + units_c * 699;
}

console.log(calc_sales(1, 2, 3)); // 2434 soma das variaveis acima