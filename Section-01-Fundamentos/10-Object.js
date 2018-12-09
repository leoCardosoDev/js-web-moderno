const prod1 = {};
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.99;
prod1['Desconto Legal'] = 0.45;//evitar

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.99,
    obj:{
        blabla: 1,
        obj:{
            desconto: 0.49
        }
    }
};
console.log(prod2);