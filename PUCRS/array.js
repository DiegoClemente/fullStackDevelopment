var frutas = ['Maçã', 'Banana'];

console.log(frutas.length);
// 2

var primeiro = frutas[0];
// Maçã
console.log(primeiro);

var ultimo = frutas[frutas.length - 1];
// Banana
console.log(ultimo);

frutas.forEach(function (item, indice, array) {
    console.log(item, indice);
  });
  // Maçã 0
  // Banana 1

var adicionar = frutas.push('Laranja');
// ['Maçã', 'Banana', 'Laranja']
console.log(frutas);


var ultimo = frutas.pop(); // remove Laranja (do final)
// ['Maçã', 'Banana'];
console.log(frutas);

var primeiro = frutas.shift(); // remove Maçã do início
// ['Banana'];
console.log(frutas);

var adicionar = frutas.unshift('Morango') // adiciona ao início
// ['Morango', 'Banana'];
console.log(frutas);

frutas.push('Manga');
// ['Morango', 'Banana', 'Manga']
console.log(frutas);

var pos = frutas.indexOf('Banana');
// 1
console.log(pos);
console.log(frutas);

var removedItem = frutas.splice(pos, 1); // é assim que se remove um item
// ['Morango', 'Manga']
console.log(frutas);

console.log("=====================");

var vegetais = ['Repolho', 'Nabo', 'Rabanete', 'Cenoura'];
console.log(vegetais);
// ['Repolho', 'Nabo', 'Rabanete', 'Cenoura']

var pos = 1, n = 2;

var itensRemovidos = vegetais.splice(pos, n);
// Isso é como se faz para remover itens, n define o número de itens a se remover,
// a partir da posição (pos) em direção ao fim da array.

console.log(vegetais);
// ['Repolho', 'Cenoura'] (o array original é alterado)

console.log(itensRemovidos);
// ['Nabo', 'Rabanete']

var copiar = frutas.slice(); // é assim que se copia
// ['Morango', 'Manga']
console.log(copiar);

var anos = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
// console.log(anos.0); // um erro de sintaxe
console.log(anos[0]); // funciona corretamente

console.log("====***********=====");
let daysOfWeek = [];
console.log(daysOfWeek);

daysOfWeek = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
    'Friday', 'Saturday'
]; 

console.log(daysOfWeek);

console.log("====***********=====");

let dayOfweek = new Array();
console.log(dayOfweek);

dayOfweek = new Array(7);
console.log(dayOfweek);
console.log('Tamanho do Array iniciado: ' + dayOfweek.length);

dayOfweek = new Array(
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
    'Friday', 'Saturday'
); 

console.log(dayOfweek);