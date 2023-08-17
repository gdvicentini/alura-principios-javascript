const listaDeChamada = ["Joao","Ana","Caio","Lara","Marjorie","Leo"]

//splice aceita 3 parâmetros, onde o primeiro índice é onde vamos começar a alterar
//-------------------(Ana, Caio, "Rodrigo")
//listaDeChamada.splice(1,2,"Rodrigo")
listaDeChamada.splice(2,0,"Rodrigo")

console.log(`Listade chamada: ${listaDeChamada}`)
