console.log(this === global)
console.log(this === module)

console.log('\n')

console.log(this === module.exports)
console.log(this === exports)

console.log('\n')

function logThis(){
    console.log('\n\nO This dentro de uma função....')
    console.log(this === global)
    console.log(this === module)
    console.log(this === module.exports)
    console.log(this === exports)
}

logThis()