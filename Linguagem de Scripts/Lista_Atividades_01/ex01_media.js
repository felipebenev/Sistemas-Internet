let notas = [10,8,7]
let soma = 0
for(index in notas){
    soma+=notas[index]
}
console.log(parseFloat((soma/notas.length).toFixed(2)))


