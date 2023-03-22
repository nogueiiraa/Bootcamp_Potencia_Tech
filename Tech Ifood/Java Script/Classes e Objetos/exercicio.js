/* 
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. 
*/

// Resoluçao 
/*
class Carros {
    marca;
    cor;
    gastoPorKm;

    constructor(cor, marca, gastoPorKm) {
        this.cor = cor;
        this.marca = marca;
        this.gastoPorKm = gastoPorKm;
    }

    calcularGasto (distancia,precoCombustivel) {
        return distancia * this.gastoPorKm * precoCombustivel;
    }
}

const corsa = new Carros('Azul', 'Chevrolet', 1/10);
const palio = new Carros('Azul', 'Fiat', 1/8);

console.log(corsa.calcularGasto(70,5));
console.log(palio.calcularGasto(70,5));
*/

// Ecercicio 2 

/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

// Resoluçao 2

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calcularImc();

        if (imc > 40) {
            return ('Obsesidade Grave');
        } else if (imc >= 30 && imc < 40) {
            return ('Obeso');
        } else if (imc >= 25 && imc < 30) {
            return ('Acima do Peso');
        } else if (imc >= 18.5 && imc < 25) {
            return ('Peso normal');
        } else {
            return ('Abaixo do peso');
        }
    }

}

const jose = new Pessoa('José', 60, 1.75);
console.log(jose.classificarImc()); // Usado para chamar uma funçao com os dados fornecidos pela variavel.

const matheus = new Pessoa('Matheus', 80, 1.75);
console.log(matheus.classificarImc());
