const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

//Remove o ultimo elemento do array
pilotos.pop()
console.log(pilotos)

//add um elemento no final do array
pilotos.push('Verstappen')
console.log(pilotos)

//Remove o 1º elemento do array
pilotos.shift()
console.log(pilotos)

//Add um elemento no primeiro indice do array
pilotos.unshift('Hamilton')
console.log(pilotos)

//pode adicionar ou remover um indice do array
//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
//remover
pilotos.splice(3, 1)
console.log(pilotos)

//Retorna um novo array
const algunsPilotos = pilotos.slice(2) // apartir do indice 2(0,1,2)
console.log(algunsPilotos)
//parte do array
const algunsPilotos2 = pilotos.slice(1,4)//naõ pega o indice 4
console.log(algunsPilotos2)