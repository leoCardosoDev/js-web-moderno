function getInteiroRandom(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

 while(opcao != -1){
    opcao = getInteiroRandom(-1, 10)
    console.log(`Opção selecionado foi: ${opcao}`)
 }

do {
    opcao = getInteiroRandom(-1, 15)
    console.log(`Opção escolhida foi: ${opcao}`)
} while(opcao != -1)