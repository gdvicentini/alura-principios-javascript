/* formato JSON:

{
    "id": 59,
    "titulo": "ECMAScript 6",
    "autor": "Diego Martins de Pinho",
    "categoria": "programação"
}

formato XML:

<livro id="59">
 <titulo>ECMAScript 6</titulo>
 <autor>Diego Martins de Pinho</autor>
 <categoria>programação</categoria>
</livro>
*/

const jsonLivro = JSON.stringify({
    id: 50,
    titulo: "Primeiros Passos com NodeJS",
    autor: "João Rubens",
    categoria: "programação",
    versoes: ["ebook", "impresso"]
})  

console.log(jsonLivro)

const objLivro = JSON.parse(jsonLivro)
console.log(objLivro)