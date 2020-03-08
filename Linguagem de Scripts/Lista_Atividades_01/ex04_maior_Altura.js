let pessoas = [[altura = 1.85, sexo = "Masculino"],
              [altura = 1.52, sexo = "Feminino"],
              [altura = 1.72, sexo = "Masculino"]]
let maiorAltura = 0

for(i = 0; i<3; i++){
    for(j = 0; j<1;j++){
        if(maiorAltura < pessoas[i][j]) maiorAltura = pessoas[i][j]
    }
}
console.log(maiorAltura)