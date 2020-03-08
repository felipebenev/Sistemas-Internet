let numeros = [10,2,5,800000,14]
let maior = 0
for(index in numeros){
    if(maior <= numeros[index]) maior = numeros[index]
}
console.log(maior)