let salario = parseFloat(prompt("Digite seu salário: "))
let aux = 0.0

if(salario<2000){
    console.log("Isento")
}
else if(salario>=2000 & salario<=3000){
    aux = salario-2000
    console.log(`R$ ${(aux*0.18)}`)
}
else if(salario>=3000 & salario<=4500){
    aux = salario-3000
    console.log(`R$ ${(80+aux*0.18)}`)
}
else if(salario>4500){
    aux = salario-4500
    console.log(`R$ ${(80+270+aux*.28).toFixed(2)}`)
}