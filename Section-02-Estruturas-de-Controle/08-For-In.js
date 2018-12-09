const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i in notas){
    console.log(i, '=', notas[i])
}

const pessoa = {
    nome: 'Leo',
    sobrenome: 'Cardoso',
    idade: 36,
    peso: 100 + 'kg'
}

for(let a in pessoa){
    console.log(`${a}: ${pessoa[a]}`)
}