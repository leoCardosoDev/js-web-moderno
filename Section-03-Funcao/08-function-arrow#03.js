//Function normal
function comparaThis(param) {
    console.log(this === param)
}
comparaThis(global)
comparaThis(this)

//Function com Bind
const obj = {}
let objComparaThis = comparaThis.bind(obj)
objComparaThis(global)
objComparaThis(obj)

//Function com arrow
let arrowComparaThis = params => console.log(this === params)
arrowComparaThis(global)
arrowComparaThis(module.exports)
arrowComparaThis(this)

//Radical: function arrow com bind - ARROW ganha - Não muda referencia
console.log('##########################')
console.log('####  ARROW COM BIND  ####')
console.log('##########################')
arrowComparaThis = arrowComparaThis.bind(obj)
arrowComparaThis(obj)
arrowComparaThis(module.exports)