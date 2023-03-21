/* Faça um programa para calcular o valor de uma viagem.

Voce terá 3 variaveis. Sendo elas:

1 - Preço do Combustivel;
2 - Gasto médio de combustível do carro por km;
3- distancia em KM da viagem 

*/

/* Minha resoluçao do desafio*/

const preço = 5.65;
const gastomedio = 10;
const distancia = 1240;

const valortotal =  distancia / gastomedio * preço;

console.log (valortotal,'reais gastos no total!'); /* .tofixed - Usado para fixar um valor na casa decimal*/

/*

Resoluçao do professor:

const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));

*/


