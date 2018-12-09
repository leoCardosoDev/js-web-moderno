//Armazenando uma função numa variavel
const imprimirSoma = function(a, b){
    console.log(a + b);
};
imprimirSoma(2,4);


//Armazenando uma função arrow em uma variavel
const soma = (a,b) => {
    return a + b;
};
console.log(soma(3,6));


//Retorno implicito
const subtracao = (a,b) => a - b
console.log(subtracao(22,12));

//Retorno implicito com um parametro só
const imprimir = a => console.log(a);
imprimir('Hello World!!');