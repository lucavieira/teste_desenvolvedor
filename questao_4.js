/*
    4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

    SP – R$67.836,43
    RJ – R$36.678,66
    MG – R$29.229,88
    ES – R$27.165,48
    Outros – R$19.849,53

    Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
*/

let estados = [{estado: "Sao Paulo", valor: 67836.43}, {estado: "Rio de Janeiro", valor: 36678.66}, {estado: "Minas Gerais", valor: 29229.88}, {estado: "Espirito Santo", valor: 27165.48}, {estado: "Outros", valor: 19849.53}]

let valor_total_mensal = 0

for(let indice = 0; indice < estados.length; indice++){
    valor_total_mensal = estados[indice].valor + valor_total_mensal
}

for(let indice = 0; indice < estados.length; indice++){
    let porcentagem = (estados[indice].valor * 100) / valor_total_mensal
    console.log(`${estados[indice].estado} = ${porcentagem.toFixed(2)}%`)
}