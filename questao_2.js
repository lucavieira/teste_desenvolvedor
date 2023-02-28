/*
    2 - Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

    IMPORTANTE:
    Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

let sequencia_fibonacci = [0, 1]

let valor = 152

while (sequencia_fibonacci.at(-1) <= valor) {
    sequencia_fibonacci.push(sequencia_fibonacci.at(-1) + sequencia_fibonacci.at(-2))
}

console.log(sequencia_fibonacci)

if(sequencia_fibonacci.includes(valor)) {
    console.log(`O valor ${valor} pertence a sequencia de Fibonacci.`)
} else {
    console.log(`O valor ${valor} não pertence a sequencia de Fibonacci.`)
}