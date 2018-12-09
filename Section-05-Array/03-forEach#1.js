const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1} - ${nome}`)
})

for (let i = 0; i < aprovados.length; i++) {
    console.log(`Dentro do FOR ${i + 1} -> ${aprovados[i]}`)
}

aprovados.forEach(nome => console.log(nome))

console.log('  \n')
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

console.log('  \n')

aprovados.forEach(function(nome, indice, array){
    console.log(array)
})