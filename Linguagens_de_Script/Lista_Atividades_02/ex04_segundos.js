let valorEmSegundos = parseInt(prompt("Digite os segundos totais: "))
let hora = 0
let minuto = 0
let segundo = 0

function converterSegundos(segundos){
    while(valorEmSegundos > 59){
        if(valorEmSegundos > 3600){
            hora+=1
            valorEmSegundos-=3600
        }
        else if(valorEmSegundos >= 60){
            minuto+=1
            valorEmSegundos-=60
        }
    }
    segundo = valorEmSegundos
    return console.log(`${hora}:${minuto}:${segundo}`)
}

converterSegundos(valorEmSegundos)