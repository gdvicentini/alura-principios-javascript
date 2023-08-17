class Conta {
    constructor(saldoCC, saldoCP, jurosP) {
        this.saldoCC = saldoCC
        this.saldoCP = saldoCP
        this.jurosP = jurosP
    }

    depositoCC(valor) {
        this.saldoCC += valor
    }

    transferenciaCP(valor) {
        this.saldoCC -= valor
        this.saldoCP += valor
    }

    transferenciaCC(valor) {
        this.saldoCC += valor
        this.saldoCP -= valor
    }

    saqueCC(valor) {
        this.saldoCC -= valor
    }

    saqueCP(valor) {
        this.saldoCP -= valor
    }

    jurosDeAniversario() {
        let jurosP = (this.saldoCP * this.jurosP)/100
        this.saldoCP += jurosP
    }

}

class ContaEspecial extends Conta {
    constructor(saldoCC, saldoCP, jurosP) {
        super(saldoCC, saldoCP, jurosP*2)
    }
}


let conta = new Conta(500,10000,2)

console.log(conta)

conta.depositoCC(5000)
console.log(conta)

conta.saqueCC(500)
console.log(conta)

conta.transferenciaCP(3000)
console.log(conta)

conta.jurosDeAniversario()
console.log(conta)

let conta2 = new ContaEspecial (10000, 50000, 1)
console.log(conta2)

conta2.saqueCC(5000)
console.log(conta2)

conta2.jurosDeAniversario()
console.log(conta2)