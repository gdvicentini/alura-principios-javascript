let nomes = ["Matheus","Maria","José"]

for(let i = 0; i <= nomes.length; i++) {
    console.log(nomes[i])
}

// Métodos de arrays:

/* exemplo com push e pop:
push: inseri no final do array
pop: remove no final do array

let elementoRemovido = nomes.pop()

console.log(elementoRemovido)
console.log(nomes)

nomes.push("Pedro")

console.log(nomes)*/

/* exemplo com shift e unshift:
shift: remove o primeiro elemento do array
unshift: adiciona um ou mais elementos no início do array

let carros = ["BMW","Audi","VW","Fiat"]

let removerPrimeiroCarro = carros.shift()

console.log(removerPrimeiroCarro)
console.log(carros)

carros.unshift("Gurgel")
console.log(carros)*/

/* exemplo com indexOf e lastIndexOf:
indexOf: encontra o índice de um determinado elemento
lastIndexOf: encontrar o último índice de um elemento

            0 1 2 3 4 5 6
let nums = [5,6,2,4,9,6,2]

console.log(nums.indexof(2))  --vai retornar o índice/posição 2

console.log(nums.lastIndexOf(2)) --vai retornar o índice/posição 6 */

/* exemplo com slice:
slice: retorna um array a partir de outro array

let numeros = [0,1,2,3,4,5]

console.log(numeros.slice(2,3)) --vai pegar apenas o índice 2, que está antes do 3

console.log(numeros.slice(3)) --vai pegar do índice 3 em diante*/

/* exemplo com forEach:
forEach: itera cada elemento do array

let nomes = ["Matheus","Maria","José","Pedro","João"]

nomes.forEach(nome => {
    console.log("O nome é " + nome)
}) -- semelhante a ideia da utilização de for com nomes [i]

/* exemplo com Includes:
includes: verifica se o array possui um determinado elemento

let carros = ["BMW","Fiat","VW","Renault","Audi"]

console.log(carros.includes("Fiat"))
console.log(carros.includes("Ford"))

-- pode ser usado por exemplo com if(carros.includes("BMW")) {}*/

/* exemplo com Reverse:
reverse: inverte um array

let carros = ["BMW","Fiat","VW","Renault","Audi"]

console.log(carros.reverse())  -- também pode inverter ordem de números*/
