//Tipos de Função
//Função Nomeada
function Subtracao(num1, num2) {
    return num1 - num2
}
console.log(Subtracao(4, 2))

//Função Anônima
let divisao = function (num1, num2) {
    if (num2 == 0) {
        return 'Impossível dividir por zero.'
    }
    else{
        return num1 / num2
    }
}
console.log(divisao(5, 2))

//Arrow Function
let multiplicacao = (num1, num2) => {
    return num1 * num2
}
console.log(multiplicacao(3, 4))


let operacaoMatematica = (num1, num2, operacao) => operacao(num1, num2)
console.log(operacaoMatematica(3, 4, divisao))

