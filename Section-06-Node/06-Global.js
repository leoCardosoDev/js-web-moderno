//console.log(global)
global.MinhaApp = {
    saudacao(){
        return 'Estou em todos os lugares!'
    },
    nome: 'Leonardo Cardoso Global'
}


global.MinhaApp2 = Object.freeze(
    {
        saudacao(){
            return 'Estou em todos os lugares!'
        },
        nome: 'Leonardo Cardoso Global'
    }
)