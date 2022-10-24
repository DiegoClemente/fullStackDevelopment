try {
    throw new Error ('Gerando um erro generico');
}
catch (e) {
    console.log(`${e.name}: ${e.message}`);
}