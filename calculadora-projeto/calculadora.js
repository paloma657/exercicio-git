
// calculadora.js

// Função de soma
export function soma(a, b) {
    return a + b;
}

// Função de subtração
export function subtracao(a, b) {
    return a - b;
}

// Função de multiplicação
export function multiplicacao(a, b) {
    return a * b;
}

// Função de divisão
export function divisao(a, b) {
    if (b === 0) {
        throw new Error("Não é possível dividir por zero");
    }
    return a / b;
}
