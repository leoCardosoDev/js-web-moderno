const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem usar callback
let notasBaixasSC = []
for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 7) {
        notasBaixasSC.push(notas[i])
    }
}
notasBaixasSC.forEach(a => console.log(a))

//Com callback
let notasBaixasCCb = notas.filter(function (nota) {
    return nota < 7
})
notasBaixasCCb.forEach(a => console.log(a))

//Com callback arrow
let notasBaixasCCbA = notas.filter(nota => nota < 7)
notasBaixasCCbA.forEach(a => console.log(a))