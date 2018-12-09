const contadorA = require('./05-instancia-Unica')
const contadorB = require('./05-instancia-Unica')

const contadorC = require('./05-nova-instancia')() // por chamart uma factory precisamos chamar como função
const contadorD = require('./05-nova-instancia')()

console.log(contadorB.valor)
contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)// o que faz no contadorA o contadorB recebe por ser mesma instancia

console.log(contadorD.valor)
contadorC.inc();
contadorC.inc();
console.log(contadorD.valor)
console.log(contadorC.valor)