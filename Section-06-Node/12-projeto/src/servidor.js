const porta = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const banco = require('./banco-de-dados')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(banco.getProdutos())
})

app.get('/produto/:id', (req, res, next) => {
    res.send(banco.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = banco.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produto/:id', (req, res, next) => {
    const produto = banco.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produto/:id', (req, res) => {
    const produto = banco.excluirProduto(req.params.id)
    res.send(produto);
});

app.listen(porta, () => {
    console.log(`Servidor executando na porta: ${porta}`)
})