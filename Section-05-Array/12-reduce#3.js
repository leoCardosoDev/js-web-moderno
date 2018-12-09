Array.prototype.reduce2 = function (callback, valorInicial) {
    let indice = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = indice; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}
const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
let result = nums.reduce2(soma,21)

console.log(result)