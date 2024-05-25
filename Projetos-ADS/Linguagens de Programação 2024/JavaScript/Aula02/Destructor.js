//Destructor de Objeto

const pessoa = {
    nome : 'Maria',
    email : 'maria@gmail.com',
    endereco : {
        rua : "Rua Florida",
        numero : 1,
        bairro : 'Das Flores'
    },
    notas : [10, 9, 8]
}
const {nome, notas} = pessoa
console.log(notas)


const {nome : n, email : e} = pessoa
console.log(n, e)

//desctructor de Array
const[a, b, c] = [1, 2, 3]
console.log(a, b, c)

