const colecionador = {
    nome:"Colecionador1",
    idade: 29,
    tipocolecao: ["quadrinhos"],
    contato: "colecionador1@email.com",
    adicionarTipo: function(propriedade,tipo){
        this[propriedade].push(tipo)
    }
}

console.log(colecionador.nome)

console.log(colecionador["nome"])

for (i = 0; i < 4; i++){
    colecionador.adicionarTipo("tipocolecao","HQ" +i)
}

console.log(colecionador.tipocolecao)