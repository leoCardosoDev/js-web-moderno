//function declaration

console.log(soma(2, 2))//chama antes de declara a função
function soma(x, y) {
    return x + y
}

//function expression
//console.log(sub(2,2))
let sub = function (x, y) {
    return x - y
}
console.log(sub(2, 2)) // só funciona depois de declarado

//named function express
let mult = function mult(x, y) {
    return x * y
}
console.log(mult(2, 2)) // só funciona depois de declarado