//Forma antiga
function somar() {
    let soma = 0
    for (let i in arguments) {
        soma += arguments[i]
    }
    return soma
}
console.log(somar())
console.log(somar(1))
console.log(somar(1,2,3))
console.log(somar(4,4,4,4))

console.log(somar(2,3,' Teste ', 'Javascript'))
console.log(2, ' x ', 2)