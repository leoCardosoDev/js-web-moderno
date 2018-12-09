Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'IPad Pro', preco: 4199, fragil: true},
    {nome: 'IPhone X', preco: 3199, fragil: true},
    {nome: 'Copo de Plástico', preco: 12.49, fragil: false},
    {nome: 'Copo de Vidro', preco: 18.99, fragil: true}
]

produto = produtos.filter2(function(p){
   // return p.fragil === false
   return p.fragil === true && p.preco > 2000
})
console.log(produto)

console.log('\n')

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

let produtosFilters = produtos.filter2(caro).filter2(fragil)
console.log(produtosFilters)