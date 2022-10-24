const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject("Rejeitado"), 2000); 
});

let ifFail = (err) => console.log(`Uma excecao foi lancada`);

myFirstPromise
.then(
    (msg) => console.log("All right!"),
    (msg) => {throw "Nao fui atendido!!"} )
.catch (ifFail);

console.log("Fim do programa!")