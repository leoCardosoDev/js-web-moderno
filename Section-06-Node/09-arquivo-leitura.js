const fs = require('fs')

const caminho = __dirname + '/09-arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assicrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

const config2 = require('./09-arquivo.json')
console.log(config2.db)

//lendo diretorio
fs.readdir(__dirname, (err, arquivos) => {
    console.log(arquivos)
} )