let nomes = []
let dado = ""

while(dado != "0"){
    dado = prompt("Digite um nome para continuar o programa, ou digite o número 0 para encerra-lo.")
    if(dado != "0") nomes.push(dado)
}

for(i = nomes.length; i >= 0; i--){
    console.log(nomes[i])
}