function criarPessoa(nome) {
    this.nome = nome
    this.falar = function () {
        return `Meu nome é ${this.nome}`
    }
}

const p1 = new criarPessoa('Leo Cardoso')
const p2 = new criarPessoa('Pri Cardoso')
console.log(p1.falar())
console.log(p2.falar())