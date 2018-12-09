const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Marisa', nota: 9.2 }
]

// IMPERATIVO
let notas = 0
for (let i = 0; i < alunos.length; i++) {
    notas += alunos[i].nota
}
mediaNotas = notas / alunos.length
console.log(mediaNotas)

//DECLARATIVO
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const totalNota = alunos.map(getNota).reduce(soma)
let mediaNota = totalNota / alunos.length
console.log(mediaNota)