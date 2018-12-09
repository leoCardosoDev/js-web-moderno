const a = {name: 'Teste'};
console.log(a);

const b = a;
console.log(b);

b.name = 'Opa';
console.log(a);

let c = 3;
let d = c;
d++;

console.log(d);
console.log(c);

let valor; // não inicializada
//console.log(valor2); // variavel não declarada.
console.log(valor);

valor = null; // ausencia de valor
console.log(valor);
//console.log(valor.toString());

const produto = {};
console.log(produto.preco);
console.log(produto);
produto.preco = 3.55;

console.log(produto);

produto.preco = undefined; //evite atribuir undefined
console.log(!!produto.preco);
//delete produto.preco;
console.log(produto);

produto.preco = null //produto sem preço
console.log(!!produto.preco);

console.log(produto);