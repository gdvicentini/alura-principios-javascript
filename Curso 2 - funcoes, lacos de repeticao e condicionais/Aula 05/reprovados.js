const alunos = ["Ana","Marcos","Maria","Mauro"]
const notas = [7,4.5,8,7.5]

// o _ utilizado é para indicar quando a variável é declarada mas não está sendo utilizada
const reprovados = alunos.filter((_aluno,indice) => notas[indice] < 5)

console.log(`Reprovados: ${reprovados}`)