//exemplo de spread operators (sintaxe de espalhamento):
const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}
   
const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
}

/*
const guerreiro = {fichaGuerreiro, equipoGuerreiro}
console.log(guerreiro) --não oferece o resultado que queremos no console */

const guerreiro = {...fichaGuerreiro, ...equipoGuerreiro}
console.log(guerreiro) //oferece o resultado esperado de objetos juntos

/* Importante notar que  caso a sintaxe de espalhamento seja usada em objetos que tenham 
chaves/propriedades com o mesmo nome, o JavaScript vai sobrescrever o valor destas 
propriedades à medida que encontra novos valores com o mesmo nome de chave. Por exemplo:
const mago = {
 nome: "Gandalf",
 classe: "mago"
}
 const guerreiro = {
 nome: "Aragorn",
 classe: "guerreiro"
}

const ranger = {
 nome: "Legolas",
 classe: "ranger"
}
onde nome e classe é colocado em todos os mesmo nome */





