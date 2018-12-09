//Object.preventExtensions -> Permiter ALTERAR, permite excluir, NÃO permite ADICIONAR
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})

console.log(`Extensivel? ${Object.isExtensible(produto)}`)
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar Branca'
delete produto.tag

console.log(produto)


// Object.seal -> selar / Permiter ALTERAR, NÃO permite EXCLUIR, NÃO permite ADICIONAR
const pessoa = { nome: 'Ana', idade: 35 }
Object.seal(pessoa)
console.log(`Selado? ${Object.isSealed()}`)
pessoa.nome = 'Juliana'
pessoa.peso = 45
delete pessoa.idade
console.log(pessoa)


// Object.freeze -> congelar / NÃO Permiter ALTERAR, NÃO permite EXCLUIR, NÃO permite ADICIONAR
const funcionario = { nome: 'João', idade: 29, cargo: 'Torneiro' }
Object.freeze(funcionario)
console.log(`Congelado? ${Object.isFrozen(funcionario)}`)
funcionario.nome = 'Maria'
funcionario.cargo = 'Auxiliar Administrativo'
funcionario.salario = 2.785
delete funcionario.idade
console.log(funcionario)