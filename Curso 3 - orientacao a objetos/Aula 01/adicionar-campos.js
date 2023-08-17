const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12345678900",
    email: "andre@email.com"
}

console.log(cliente)

// Informação adicionada posteriormente para a classe cliente
cliente.fone ="999998888"

console.log(cliente)

// Ao adicionar novamente fone, ele entende que é a mesma variavel anterior 
//e vai substituir o valor anterior
cliente.fone = "888887777"

console.log(cliente)