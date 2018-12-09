function soNotaBoa(nota){
    if(nota >= 7){
        console.log("Aprovado com " + nota)
    }
}

soNotaBoa(7.1)
soNotaBoa(6.9)

function seForVerdade(valor){
    if(valor){
        console.log('É verdade... ' + valor );
    }
}

seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)

seForVerdade(-1)
seForVerdade(' ')
seForVerdade('w')
seForVerdade([])
seForVerdade([1,2])
seForVerdade({})
seForVerdade({nome: 'Leo'})