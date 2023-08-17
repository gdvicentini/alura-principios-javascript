const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
}

console.log(objPersonagem)

// Para remover a propriedade "aliado", podemos utilizar o operador 'delete':
delete objPersonagem.aliado

console.log(objPersonagem.aliado)

// Também pode ser utilizado a notação de colchetes:

// delete objPersonagem.aliado
// delete objPersonagem["status"]
// console.log(objPersonagem.aliado) //undefined
// console.log(objPersonagem.status) //undefined

const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

console.log(delProp) //true
console.log(delPropInexistente) //true