const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar();

// conflito entre paradigmas: funcional e OO
const falar = pessoa.falar
falar()

//Resolver conflito
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

const falar2 = pessoa.falar.bind(pessoa)
falar2()
