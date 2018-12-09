const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('TOP ALUNO')
            break
        case 8:
        case 7:
            console.log('APROVADO')
        break
        case 6:
        case 5:
        case 4:
            console.log('RECUPERAÇÃO')
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('REPROVADO')
            break
        default:
            console.log('NOTA INVÁLIDA')
    }
}

imprimirResultado(10)
imprimirResultado(7.6)
imprimirResultado(4)
imprimirResultado(1.9)
imprimirResultado(-1)