// this associado 

//Function normal
let dobroNormal = function (a) {
    return 2 * a
}
//Function Arrow
let dobroArrow = (a) => {
    return 2 * a
}
//Function Arrow reduzida
dArrowRedu = a => 2 * a // return implicito

console.log(dobroNormal(2))
console.log(dobroArrow(4))
console.log(dArrowRedu(6))

// Function normal
let ola = function () {
    return 'Olá normal'
}
//Function arrow
let olaA = () => {
    return 'Olá Arrow'
}
//Function arrow reduzida
let olaRedu = () => 'Olá Arrow Reduzido'
let olaRedu2 = _ => 'Olá Arrow Reduzido 2' // parametro any
console.log(ola())
console.log(olaA())
console.log(olaRedu())
console.log(olaRedu2())