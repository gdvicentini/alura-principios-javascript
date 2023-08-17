class Carrinho {
    constructor(itens, qtd, valorTotal) {
        this.itens = itens
        this.valorTotal = valorTotal
        this.qtd = qtd
    }

    addItem(item) {
        let contador = 0

        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].qtd += item.qtd
                contador = 1
            }
        }

        if(contador == 0) {
            this.itens.push(item)
        }

        this.qtd += item.qtd
        this.valorTotal  += item.preco*item.qtd
    }

    removeItem (item) {
        
        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id) {
                
                let obj = this.itens[itemCarrinho];
                let index = this.itens.findIndex(function (obj) {
                    return obj.id == item.id
                })

                this.qtd -= this.itens[itemCarrinho].qtd
                this.valorTotal  -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd

                this.itens.splice(index, 1)

            }
        }
    }
}

let carrinho = new Carrinho ([
    {
        id: 01,
        nome: 'Camiseta',
        qtd: 5,
        preco: 40
    },
    {
        id: 02,
        nome: 'Calça',
        qtd: 10,
        preco: 80
    }
], 15, 1000)

console.log(carrinho)

carrinho.addItem({id: 01, nome: 'Camiseta', qtd: 2, preco: 40})
console.log(carrinho)

carrinho.addItem({id: 03, nome: 'Boné', qtd: 1, preco: 15})
console.log(carrinho)

carrinho.removeItem({id: 01, nome: 'Camiseta', qtd: 3, preco: 40})
console.log(carrinho)