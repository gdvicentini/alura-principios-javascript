const pessoa = {
    nome: "Peter Parker",
    dataNascimento: "02/01/1993",
    rg: "9838123-9",
    telefone: "(11) 98888-7777",
    email: "peter.parker@marvel.com"
}

console.log(pessoa)

pessoa.cpf = "099181149-62"
pessoa.nometio = "Tio Ben"

console.log(pessoa)
console.log(pessoa.nometia)

delete pessoa.nometio

console.log(pessoa)