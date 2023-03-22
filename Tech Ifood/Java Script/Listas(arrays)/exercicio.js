// 1) Crie um programa que dado um número imprima a sua tabuada.

/*
const tabuada = [];

const numero = 11;

for (let i = 0; i <= 10; i++) {
    const resultado = i * numero;
    console.log(i, 'x', numero, '=', resultado);
}
*/

// Resoluçao do Professor

/*

const numero = 11;

for (let i = 1; i <= 10; i++) {
    console.log(i * numero);
}
*/

// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

/*

const numeros = [1, 6, 1, 56, 64, 54, 4, 5];


for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];

    if (numero % 2 === 0) {
        console.log(numero);
    }
} 

*/

// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

/*
const listaNomes = ['Matheus', 'Stefany', 'Ana', 'Vitoria', 'Anely', 'Vitor'];


for (let i = 0; i < listaNomes.length; i++) {
    const nome = listaNomes[i];

    if (nome[0] === 'V') {
        console.log(nome);
    }
} 

*/

// 4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;
/*
const numeros = [];

for (let i = 10; i <= 50; i++) {
    const numero = i;
    
    if (numero % 2 === 0) {
        numeros.push(i);
    }
}

console.log(numeros); */

// 5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
// Ex de lista = [2, 7, 3, 8, 10, 4]

/*const lista = [2, 7, 3, 8, 10, 4];

for (let i = 0; i < lista.length; i++) {

    if (lista[i] > 5) {
        console.log(lista[i]);
    }
}*/

const nomeRestaurante = 'Matheus';
const tempoEstimadoEntrega = 20;

console.log ('O restaurante', nomeRestaurante, 'entrega em', tempoEstimadoEntrega, ' minutos')
