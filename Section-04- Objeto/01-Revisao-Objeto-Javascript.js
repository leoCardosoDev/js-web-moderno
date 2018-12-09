// coleção dinamica chave/valor
const produto = new Object
//maneiras de criar
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220
console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

//objetos mais complexos
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome:  'Raul Castro',
        idade: 36,
        endereco:{
            logradouro: 'Rua ABC',
            numero: 35
        }
    },
    condutores: [{
        nome: 'Junior', 
        idade: 19
    }, {
        nome: 'Pri',
        idade: 20
    }],
    calcularValorSeguro: function(){
        //...
    }
}
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)
delete carro.condutores
console.log(carro)