function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 12)
const aula2 = new Aula('Até breve', 34)
console.log(aula1, aula2)

//simulando a criação de new
function nova(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = nova(Aula, 'Nova aula', 56)
const aula4 = nova(Aula, 'Fim da nova aula', 78)
console.log(aula3, aula4)