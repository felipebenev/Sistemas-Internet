let numeros = [10,20,30,40,50]
function quadrado(numero){
    let quadrado = numero**2
    return console.log(`O quadrado de ${numero} é: ${quadrado}`)
}
for(index in numeros){
    quadrado(numeros[index])
}

