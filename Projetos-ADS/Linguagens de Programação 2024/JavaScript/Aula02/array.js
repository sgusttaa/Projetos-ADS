//Array
const lista = [1, 2.2, 3, 4, 5, 6.7, 7]
//mostrar os dados
console.log(lista[2])

lista[2] = 'edson'

console.log(lista.length)
lista[7] = "novo"
console.log(lista)

lista[12] = 123
console.log(lista)

//adiciona/exclui valores no começo da lista
lista.unshift(456.6)
console.log(lista)
lista.shift()
console.log(lista)

//adiciona/exclui valore no final da lista
lista.push("mais um")
console.log(lista)
lista.pop()
console.log(lista)