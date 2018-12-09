// Parametros e retornos são opcionais
function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Area acima do permitido: ${area}m2`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area('', 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 77, 45, 67))
console.log(area(5,5))