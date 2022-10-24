let json = 'incorreto'; 

try {
    let pessoa = JSON.parse(json);
    console.log(pessoa.nome);
}
catch (e) {
    if (e instanceof SyntaxError) {
        console.log(`Erro ${e.name}: ${e.message}`);
    }else {
        console.log("Relanca a excecao pois nao sabe como tratar!");
        throw e;
    }
}finally {
    console.log("Encerra tratamento")
}