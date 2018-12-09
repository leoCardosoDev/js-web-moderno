console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carla', 'Ana')
console.log(aprovados)

aprovados = ['Caio', 'Joana', 'Joelma']

aprovados[3] = 'Paulo'
aprovados.push('João')

aprovados[9] = 'Rafaela'

for(i = 0; i < aprovados.length; i++){
    aprovados.sort()
    console.log(`${i}-) ${aprovados[i]}`)
    delete aprovados[1]
}

aprovados = ['Caio', 'Joana', 'Joelma']
aprovados.splice(1,1)
console.log(aprovados)