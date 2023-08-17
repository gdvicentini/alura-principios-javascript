/* exemplo com trim:
trim: remove tudo que não é string*/

let nome = "     Matheus ";

let nomeCorrigido = nome.trim()

console.log(nome)
console.log(nomeCorrigido)

/* exemplo com padStart:
padStart: insere caracteres antes da string

let sku = "34"

console.log(sku.padStart(6, "0")) --vai inserir 6 digitos antes do valor de sku

let sku2 = "7348"

console.log(sku.padStart(6, "0")) */

/* exemplo com split:
split: divide a string em array

let frase = "Testando o método split"

console.log(frase.split(" ")) --separador definido por espaços

let palavras = frase.split(" ")

console.log(palavras) --vai retornar o array dividido */

/* exemplo com join:
join: processo inverso do split

let frase = "Testando o método join"
let palavras = frase.split(" ")
let novafrase = palavras.join("@") --vai incluir @ entre frases

console.log(novafrase)

console.log(palavras.join(" ")) */

/* exemplo com repeat:
repeat: repete uma string de acordo com um parâmetro number

let palavra = "Repetir "

console.log(palavra.repeat(20)) --vai repetir a string 20 vezes */
