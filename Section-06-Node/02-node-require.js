const http = require('http')

const c = require('./02-pastaA/pastaB/pastaC')
console.log(c.helloWorldNode)

http.createServer((req, res) => {
    res.write('Hello World!')
    res.end()
}).listen(8080)