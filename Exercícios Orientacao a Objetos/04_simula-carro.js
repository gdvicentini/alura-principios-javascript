class Carro {
    constructor(marca, cor, gasolinaRestante, consumo) {
        this.marca = marca
        this.cor = cor
        this.gasolinaRestante = gasolinaRestante
        this.consumo = consumo
    }

    consumoGasolina(km) {
        let litroConsumo = km/this.consumo 
        
        this.gasolinaRestante -= litroConsumo
    }

    abasteceGasolina(litros) {
        this.gasolinaRestante += litros
    }
}

let carro = new Carro('VW','preto',200,14)

console.log(carro)

carro.consumoGasolina(100)

console.log(carro)

carro.abasteceGasolina(17.15)

console.log(carro)