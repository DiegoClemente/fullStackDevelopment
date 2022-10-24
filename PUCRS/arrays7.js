const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'giraffe', 'dog', 'bat', 'giraffe'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

console.log(pets.includes('giraffe', 2))
// expected output: true