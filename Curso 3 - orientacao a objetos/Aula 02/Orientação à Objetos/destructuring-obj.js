const person = {
    name: "Jhon",
    lastname: "Doe"
}

const {name: fname, lastname: lname} = person;

console.log(fname)
console.log(lname)

let obj = {
    rodas: 4,
    portas: 4,
    tetosolar: true,
    motor: "2.0"
}

const {rodas: vRodas, portas: vPortas, tetosolar: vTetoSolar, motor: vMotor} = obj

console.log(vRodas)
console.log(vPortas)
console.log(vTetoSolar)

/* exemplo de destructuring com array:
let nomes = ["Matheus","João","Pedro"]
let [nomeA,nomeB,nomeC] = nomes

console.log(nomeA)
console.log(nomeB)

let numeros = [2,4,5,8]
let [num1, num2, num3, num4] = numeros

console.log(num1)
console.log(num3)*/
