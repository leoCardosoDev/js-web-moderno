//Pecorre um array, gerando um novo ARRAY com um proposito
const nums = [1, 2, 3, 4, 5]

//for com proposito
let resultado = nums.map(function (e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

console.log('\n \n')
console.log(nums.map(soma10))
console.log(nums.map(triplo))
console.log(nums.map(paraDinheiro))

console.log('\n \n')
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)