//par nome/valor
const saudacao = 'Hello World'; //contexto lexico 1

function exec() {
    const saudacao = 'OPA'; //contexto lexico 2
    return saudacao;
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Leonardo',
    idade: 36,
    peso: 90,
    endereco: {
        rua: 'Belgica',
        numero: 129,
        complemento: 'Casa 4'
    }

};

console.log(saudacao);
console.log(exec());
console.log(cliente);
