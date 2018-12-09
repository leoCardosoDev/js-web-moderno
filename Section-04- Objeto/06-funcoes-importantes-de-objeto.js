const pessoa = {
    nome: 'Priscila',
    idade: 27,
    peso: 55 + 'kg'
}

//Object Keys
console.log(Object.keys(pessoa))
//Object Values
console.log(Object.values(pessoa))
//Objetc entries
console.log(Object.entries(pessoa))

//Pecorrendo Array
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]} = ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} => ${valor}`)
})

//Definindo novos Propriedades
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '05/01/1990'
})

pessoa.dataNascimento = '09/01/1982'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const destino = { a: 1 }
const o2 = { b: 2 }
const o3 = { c: 3, a: 4 }
const obj =  Object.assign(destino, o2, o3)
console.log(obj)

//Object.freeze
Object.freeze(obj)
obj.c = 1234
console.log(obj)