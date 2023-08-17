const nomes = ["João","Juliana","Ana","Caio","Lara","Marjorie","Guilherme",
"Aline","Fabiana","Andre","Carlos","Paulo","Bia","Vivian","Isabela",
"Vinicius","Renan","Renata","Daisy","Camilo"]

//são 20 alunos no total
//------------------------(0, 10)
const sala1 = nomes.slice(0,nomes.length/2) //--comando vai retornar array até a posição 9, o 10 não entra

//------------------------(10)
const sala2 = nomes.slice(nomes.length/2) //--se não definir parâmetro inicial da posição, ele vai
//considerar a partir da posição 10 como início

console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)
