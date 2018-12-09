// Usando Literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object)
console.log(typeof new Object)
obj2 = new Object
console.log(obj2)

//functions construstoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const prod1 = new Produto('Caneta', 7.99, 0.15)
const prod2 = new Produto('Notebook', 2999.99, 0.25)
console.log(prod1.getPrecoComDesconto())
console.log(prod2.getPrecoComDesconto())

//Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario())
console.log(f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Função famosa que retorna Objeto
const fromJSON = JSON.parse('{"info": "Eu sou um JSON"}')
console.log(fromJSON)
console.log(fromJSON.info)