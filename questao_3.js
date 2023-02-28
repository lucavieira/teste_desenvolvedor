/*
    3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
    • O menor valor de faturamento ocorrido em um dia do mês;
    • O maior valor de faturamento ocorrido em um dia do mês;
    • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

    IMPORTANTE:
    a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
    b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

const jsonData = require('./dados.json') // Carregando arquivo JSON

let soma = 0
let dias_superiores_a_media_mensal = 0

for(let indice = 0; indice < jsonData.length; indice++) {
    soma = jsonData[indice].valor + soma
}

const media_mensal = soma / jsonData.length

for(let indice = 0; indice < jsonData.length; indice++) {
    if(indice == 0) {
        var menor_faturamento = jsonData[indice].valor
        var maior_faturamento = jsonData[indice].valor
    }
    
    if(jsonData[indice].valor < menor_faturamento && jsonData[indice].valor != 0) {
        menor_faturamento = jsonData[indice].valor
    }

    if (jsonData[indice].valor > maior_faturamento) {
        maior_faturamento = jsonData[indice].valor
    }

    if(jsonData[indice].valor > media_mensal) {
        dias_superiores_a_media_mensal++
    }
}

console.log(`Menor faturamento em um dia no mês foi: R$${menor_faturamento}`)
console.log(`Maior faturamento em um dia no mês foi: R$${maior_faturamento}`)
console.log(`Foram ao todo ${dias_superiores_a_media_mensal} dias em que o faturamento diário superou a media mensal.`)