const circulo = require('./modulo1.js');
console.log(`Area do circulo de raio 4 é ${circulo.area(4)}`);

// Desestruturando o objeto e acessando a mesma função 
const {area} = require('./modulo1.js');
console.log(`Area do circulo de raio 2 é ${area(2)}`);