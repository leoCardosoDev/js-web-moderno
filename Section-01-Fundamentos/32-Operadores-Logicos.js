function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    //const comprarTV32 = !!(trabalho1) ^ trabalho2 //bitwise xor
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return {
        comprarSorvete,
        comprarTV50,
        comprarTV32,
        manterSaudavel
    }
}

console.log('01) ', compras(true, true));
console.log('02) ', compras(true, false));
console.log('01) ', compras(false, true));
console.log('01) ', compras(false, false));