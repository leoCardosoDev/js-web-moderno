//
const alunos = [
    { nome: 'Jesus', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'José', nota: 9.8, bolsista: false },
    { nome: 'Madalena', nota: 8.7, bolsista: true }
]

const todosBolsista = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsista))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
let result = alunos.map(a => a.bolsista).reduce(algumBolsista)
console.log(result)