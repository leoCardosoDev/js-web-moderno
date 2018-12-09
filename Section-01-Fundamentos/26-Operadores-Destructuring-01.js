// Novo recurso do ES2015
const pessoa = {
    nome: 'Ana',
    idade: 25,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
};

const {nome, idade } = pessoa;
console.log(nome, idade);

const {nome: n, idade: i } = pessoa;
console.log(n,i);

const {sobrenome, bemHumor = true} = pessoa;
console.log(sobrenome, bemHumor);

const { endereco: {logradouro, numero, cep = '06416-200'} } = pessoa;
console.log(logradouro, numero, cep);