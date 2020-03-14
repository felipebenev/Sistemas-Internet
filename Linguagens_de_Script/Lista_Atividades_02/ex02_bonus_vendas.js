let nome = prompt("Digite seu nome: ")
let salarioFixo = parseFloat(prompt("Digite seu salário: "))
let vendas = parseFloat(prompt("Digite o valor total de suas vendas: "))

console.log(`TOTAL = R$ ${(salarioFixo+vendas*0.15).toFixed(2)}`)