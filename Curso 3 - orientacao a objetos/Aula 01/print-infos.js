const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12345678900",
    email: "andre@email.com"
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`)
console.log(`Meu nome é ${cliente.nome} e os três primeiro dígitos do meu cpf é ${cliente.cpf.substring(0,3)}.`)