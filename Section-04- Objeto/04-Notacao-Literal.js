const a = 1
const b = 2
const c = 3

antObj = {
    a: a,
    b: b,
    c: c
}

objEm6 = {a,b,c}
console.log(antObj, objEm6)

const nomeAttr = 'nota'
const valorAttr = 7.87
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function(){
        return 'Jeito antigo'
    },
    funcao2() {
        return 'Jeito novo'
    }
}
console.log(obj5)
console.log(obj5.funcao1())
console.log(obj5.funcao2())