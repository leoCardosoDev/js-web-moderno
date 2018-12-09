console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}
console.log('Escola Cod3r'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([22, 1, 2, 3, 4, 5].first())
console.log(['Ana', 'Maria', 'João'].first())

//Não subescrever uma função já existente
String.prototype.toString = function(){
    return 'Lascou-se tudo!'
}
console.log('Escola Cod3r'.reverse())