/*
Escreva uma função que receba valores numéricos inteiros e retorne o menor valor.
  Exemplos de retorno esperado:
    minor(0, 2, 4, -1, 5, 10, 50); Saida esperada -> -1
    minor(4, 5, 1, 3); Saida esperada -> 1
*/

function minor(...args){
    return args.reduce((acc, cur) => {
        return (cur < acc) ? cur : acc;
    });
}

console.log(minor(0, 2, 4, -1, 5, 10, 50));
console.log(minor(4, 5, 1, 3));