Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome" : "Borracha", "preco": 3.45}',
    '{"nome" : "Caderno", "preco": 13.90}',
    '{"nome" : "Kit Lapis", "preco": 41.22}',
    '{"nome" : "Caneta", "preco": 7.50}'
]

//Retornar um array com apenas o preço
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const apenasNome = produto => produto.nome
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

preco = carrinho.map2(paraObjeto).map2(apenasPreco).map2(paraDinheiro)
nome = carrinho.map2(paraObjeto).map2(apenasNome)

console.log(preco)
console.log(nome)