const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    }
}
console.log(JSON.stringify(obj))

let jsonIvalido = "{ 'a': 1, 'b': 2, 'c': 3 }"
let jsonValido = '{ "a": 1, "b": 2, "c": 3 }' // todo atributo em JSON precisa de aspas duplas-> "a":1
objJson = JSON.parse(jsonValido)
console.log(objJson)
console.log(objJson.a)

let jsonValido2 = '{ "a": 1, "b": "string"}' // strings precisa de aspas duplas-> "b": "string"
objJson2 = JSON.parse(jsonValido2)
console.log(objJson2)