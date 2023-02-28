/*
    5) Escreva um programa que inverta os caracteres de um string.

    IMPORTANTE:
    a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
    b) Evite usar funções prontas, como, por exemplo, reverse;
*/

const palavra = 'torta'
let nova_palavra = ''

for(let letra = palavra.length - 1; letra >= 0 ; letra--) {
    nova_palavra += palavra[letra]
}

console.log(nova_palavra)