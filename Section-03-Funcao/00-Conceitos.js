// forma literal
function fun1() {
    console.log('Função Literal')
}
fun1()

// amarzenada em variavel
const fun2 = function () {
    console.log('Amarzenada em variavél ou função anônima')
}
fun2()

//Amarzenar dentro de um array
const slot = [function (a, b) { return a + b }, fun1, fun2]
console.log(slot[0](2, 3))

//Amarzenar num objeto
const obj = {}
obj.falar = function () { return 'Hello World' }
console.log(obj.falar())

//passar função como parametro para outra função
function fnc() {
    console.log('Função parâmetro')
}
function fncP(fnc) {
    fnc()
}
fncP(fnc)

//Funçao que retorna funçao
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(5)
