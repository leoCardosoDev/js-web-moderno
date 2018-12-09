Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    if(nota.entre(9, 10)){
        console.log('TOP ALUNO')
    }else if(nota.entre(7, 8.99)){
        console.log('APROVADO')
    }else if(nota.entre(3, 6.9)){
        console.log('RECUPERAÇÃO')
    }else if(nota.entre(0, 2.9)){
        console.log('REPROVADO')
    }else{
        console.log('NOTA INVÁLIDA')
    }
}

imprimirResultado(9.5)
imprimirResultado(7.8)
imprimirResultado(6.9)
imprimirResultado(4.9)
imprimirResultado(3.9)
imprimirResultado(66)