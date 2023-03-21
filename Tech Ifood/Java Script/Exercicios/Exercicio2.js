/*
O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave; */

const peso = 75;
const altura = 1.5;

const IMC = peso / (altura * altura);

console.log(IMC)

if (IMC > 40) {
    console.log('Obsesidade Grave')
} else if (IMC > 30) {
    console.log('Obeso')
} else if (IMC > 25) {
    console.log('Acima do Peso')
} else if (IMC > 18.5) {
    console.log('Peso normal')
} else {
    console.log('Abaixo do peso')
}


/* 
Resoluçao Professor

const peso = 75;
const altura = 1.5;

const imc = peso / Math.pow(altura, 2);

console.log(imc)

if (imc > 40) {
    console.log('Obsesidade Grave')
} else if (imc >= 30 && <40) {
    console.log('Obeso')
} else if (imc >= 25 && <30) {
    console.log('Acima do Peso')
} else if (imc >= 18.5 && <25ssss) {
    console.log('Peso normal')
} else {
    console.log('Abaixo do peso')
}

*/