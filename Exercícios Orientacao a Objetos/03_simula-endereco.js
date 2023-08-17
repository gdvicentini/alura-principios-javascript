class Endereco {
    constructor (rua, bairro, cidade, estado) {
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }

    set novaRua(novaRua) {
        this.rua = novaRua
    }

    set novoBairro(novoBairro) {
        this.bairro = novoBairro
    }

    set novaCidade(novaCidade) {
        this.cidade = novaCidade
    }

    set novoEstado(novoEstado) {
        this.estado = novoEstado
    }

}

let endereco = new Endereco('Rua Prudente de Moraes','Zona 01','Cianorte','Paraná')

console.log(endereco)

endereco.novaRua = 'Rua dos Pardais'

console.log(endereco)

endereco.novoBairro = 'Zona 02'
endereco.novaCidade = 'São Paulo'
endereco.novoEstado = 'São Paulo'

console.log(endereco)