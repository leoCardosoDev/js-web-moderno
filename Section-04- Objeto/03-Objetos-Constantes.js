// Pq uma const constegue ser modificada partindo de um objeto?

//pessoa(const) -> espaçodeMemoria -> chave -> valor
// const pessoa = {} // O valor de constante é o objeto{}
const pessoa = { nome: 'João' }
console.log(pessoa)
/*
aqui tento atribuir um novo valor a pesso
pessoa = function(){
    console.log('Função')
}
*/
pessoa.nome = 'Pedro'
console.log(pessoa)



Object.freeze(pessoa)
pessoa.nome = 'Marisa'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa)

const objetoConstante = Object.freeze({ nome: 'Joaquim' })
objetoConstante.nome = 'Maria'
console.log(objetoConstante)