let idadeEmDias = parseInt(prompt("Digite sua idade em dias: "))
let ano = 0
let mes = 0
let dia = 0

while(idadeEmDias > 30){
    if(idadeEmDias > 365){
        ano+=1
        idadeEmDias-=365
    }
    else if(idadeEmDias > 30){
        mes+=1
        idadeEmDias-=30
    }
}
dia = idadeEmDias

console.log(`${ano} ano (s)`)
console.log(`${mes} mes (es)`)
console.log(`${dia} dia (s)`)
