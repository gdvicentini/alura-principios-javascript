class contaBanco {
    constructor(saldo) {
        this.saldo = saldo
    }

    deposito(valor) {
        this.saldo += valor
    }

    saque(valor) {
        this.saldo -= valor
    }
}

let conta = new contaBanco (1000)

conta.deposito(1000)
console.log(conta.saldo)

conta.saque(500)
console.log(conta.saldo)