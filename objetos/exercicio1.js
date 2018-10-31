/*
Escreva uma função que possa ser utilizada para fazer a comparação de dois objetos pelos valores de suas propriedades
  Exemplo de retorno esperado:
    let obj1 = { ‘nome’: ‘Pedro’ };
    let obj2 = { ‘nome’: ‘Pedro’ };
    console.log(obj1 === obj2); Saida esperada -> false!
    console.log(deepEqual(obj1, obj2)); Saida esperada -> true!

Considere que o seu objeto pode ter outros objetos como propriedade :)
*/

function areEquals(obj1, obj2) {
    let obj1Properties = Object.getOwnPropertyNames(obj1);
    let obj2Properties = Object.getOwnPropertyNames(obj2);

    if(obj1Properties.length != obj2Properties.length)
        return false;
    let objLength = obj1Properties.length;

    for (let i=0; i<objLength; i++){
        let key1 = obj1Properties[i];
        let key2 = obj2Properties[i];                                           
        if(key1 != key2)
            return false;
        
        let value1 = obj1[key1];
        let value2 = obj2[key2];

        if(typeof value1 == 'object' && typeof value2 == 'object'){
            let childsAreEqual = areEquals(value1, value2);
            if(childsAreEqual==false)
                return false;
            else
                continue
        }

        if(value1!==value2)
            return false;       

    }
    return true;
}

let obj1 = { 'nome': 'Pedro' };
let obj2 = { 'nome': 'Pedro' };
console.log(obj1 === obj2);
console.log(areEquals(obj1, obj2));