let carro = {
    portas: 2,
    capPortaMalas: "200l",
    motor: "2.0"
}

let adicionais = {
    tetosolar: true,
    arcondicionado: true
}

console.log(carro)
console.log(adicionais)

Object.assign(carro, adicionais)

console.log(carro)