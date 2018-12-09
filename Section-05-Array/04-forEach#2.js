Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Bia', 'Juliana', 'Ana']
aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1} - ${nome}`)
})

console.log('\n')
aprovados.forEach2(function (nome, indice) {
    console.log(`FOREACH-2 ${indice + 1} => ${nome}`)
})