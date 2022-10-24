const myFirstPromise = new Promise((resolv, reject) => {
    setTimeout(() => {
        resolv("Sucesso!");
    }, 2000);
});

let ifSucceed = (successMessage) => {
    console.log(`Finalizado! ${successMessage}`);
}

myFirstPromise.then(ifSucceed);

console.log("Fim do programa!");