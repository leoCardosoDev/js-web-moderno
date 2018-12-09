function criarProdutos(nome, preco, descricao, desconto = 0) {
    return {
        nome,
        preco,
        descricao,
        desconto
    }
}

console.log(criarProdutos('Mc', 2.144, 'Teste de descrição 1', 10))
console.log(criarProdutos('Mc 2', 2.144, 'Teste de descrição 1', 5))
console.log(criarProdutos('Mc 3', 2.144, 'Teste de descrição 1', 30))
console.log(criarProdutos('Mc 4', 2.144, 'Teste de descrição 1', 15))
console.log(criarProdutos('Mc 5', 2.144, 'Teste de descrição 1', 25))
console.log(criarProdutos('Mc 6', 2.144, 'Teste de descrição 1', 55))