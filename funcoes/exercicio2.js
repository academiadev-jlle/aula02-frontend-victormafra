/*
Escreva uma função que itere uma quantidade N de vezes (passada via parâmetro) e execute uma função passada via parâmetro.
  Exemplos de retorno esperado:
    repeat(5, console.log); Saida esperada ->  1, 2, 3, 4, 5
    let soma = 0;
    repeat(2, (x) => soma += x);
    console.log(soma); Saida esperada ->  3
*/

function repeat(n, func=this){
    for(let i=1; i<=n; i++){
        func(i);
    }
}

repeat(5, console.log);
let soma = 0;
repeat(2, (x) => soma += x);
console.log(soma);
