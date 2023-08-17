const clientes = 
[{
    nome: "Andre",
    idade: 36,
    cpf:"12543652266",
    email:"andre@email.com",
    fones: ["55912345498","5521988743124"],
    dependentes: [
        {
          nome: "Sara Silva",
          parentesco:"Filha",
          dataNasc:"20/03/2011"
        },
        {
          nome:"Samia Maria",
          parentesco:"Filha",
          dataNasc:"04/01/2014"
        }],
    },
    {
        nome:"Juliana",
        cpf:"56767867867",
        dependentes: [{
            nome:"Sophia",
            parentesco: "filha",
            dataNasc:"30/08/2020"
        }]
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.log(listaDependentes)
console.table(listaDependentes)