import { soma, subtracao, multiplicacao, divisao } from './calculadora.js';
import moment from 'moment';

// Operações matemáticas
console.log("Soma: ", soma(10, 5));
console.log("Subtração: ", subtracao(10, 5));
console.log("Multiplicação: ", multiplicacao(10, 5));
console.log("Divisão: ", divisao(10, 5));

// Função para calcular idade
function calcularIdade(anoNascimento) {
    if (!anoNascimento || typeof anoNascimento !== "number") {
        throw new Error("Ano de nascimento inválido");
    }
    const anoAtual = moment().year(); // Obtém o ano atual
    return anoAtual - anoNascimento;
}

// Teste do cálculo de idade
const anoNascimento = 1990;
const idade = calcularIdade(anoNascimento);

console.log(`Idade: ${idade} anos`);
