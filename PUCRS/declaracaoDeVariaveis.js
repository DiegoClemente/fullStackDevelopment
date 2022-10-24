{
    let f_name = 'Alex';
    const ZIP = 50067;
    var age = 25;
}
console.log(f_name); // ReferenceError: f_name is not defined (escopo privado)
console.log(ZIP); // ReferenceError: ZIP is not defined (escopo privado)
console.log(age); // 25 (escopo variavel global)
