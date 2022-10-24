let user = '{"name": "John", "age": 35, "isAdmin": false, "friends": [0, 1, 2, 3]}';

// propriedade ainda nao existe
// console.log(user.friends[0] ?? "Propriedade Inexistente");

user = JSON.parse(user);
console.log(user.friends[0]);