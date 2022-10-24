import { UmaClasse } from "./desestruturandoObjeto1.mjs";

let umaClasse = new UmaClasse("Primeiro atributo");

let {capturaPrimeiroAtributo: umAtributo, outroAtributo} = UmaClasse;

console.log("um Atributo " + umAtributo);
console.log("Outro Atributo " + outroAtributo);