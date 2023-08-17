//O * no final da function demonstra que é um generator
function* criadorId() {
    let id = 0
    while(true) {
        yield id++;
    }
}

let criarId = criadorId();

console.log(criarId.next().value)
console.log(criarId.next().value)
console.log(criarId.next().value)
console.log(criarId.next().value)
console.log(criarId.next().value)
console.log(criarId.next().value)
