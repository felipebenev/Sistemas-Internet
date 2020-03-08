let pessoas = [[altura = 1.85, peso=98.2,  sexo = "Masculino"],
              [ altura = 1.52, peso=47.3,  sexo = "Feminino"],
              [ altura = 1.72, peso=103.4, sexo = "Masculino"]]

function IMC(altura,peso){
    let IMC = peso/altura**2
    return console.log(`Sua altura é: ${altura}, seu peso é: ${peso}, então seu IMC é de: ${parseFloat(IMC.toFixed(2))}`)
}
for(i = 0; i<3; i++){
    IMC(pessoas[i][0],pessoas[i][1])
}
