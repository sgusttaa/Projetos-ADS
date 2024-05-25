//Faça uma função que mostre o dobro do número passado. Caso o número seja menor
//ou igual a zero deve mostrar a mensagem “Só é aceito números positivos maiores que zero”


function exibir(num){
    return num * 2;
}

let num = 2;

for(let i = 0; i< 10; i++){
    const dobro = exibir(num); 
    console.log(dobro);
    num = dobro;
}
