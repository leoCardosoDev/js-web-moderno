const nome = 'Leonardo';
const idade = 36;
const profisao = "Web Developer";
const concatenacao = "Olá! Meu nome é " + nome + ", tenho " + idade + " anos e minha profissão é: " + profisao;
console.log(concatenacao); 

//Template Engine `Abre crase ` fecha crase
const template = `Olá! Meu nome é ${nome}, tenho ${idade} anos e minha profissão é: ${profisao}`;
console.log(template);

//expressões
console.log(`1 + 1 = ${1+1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`)