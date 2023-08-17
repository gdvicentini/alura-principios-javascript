//exemplo simples de JSON:
let pessoa = {
    "nome": "Matheus",
    "idade": 28,
    "profissão": "Programador",
    "hobbies": ["video game","Leitura","Correr"]
}

console.log(pessoa.nome)
console.log(pessoa.idade)

//exemplo de conversão de JSON para string utilizando exemplo anterior:
let pessoaTexto = JSON.stringify(pessoa)

console.log(pessoaTexto)

let pessoaJSON = JSON.parse(pessoaTexto)

console.log(pessoaJSON)
console.log(pessoaJSON.hobbies[0])