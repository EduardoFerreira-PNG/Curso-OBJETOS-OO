const cliente = {
    nome: "Eduardo",
    idade: 18,
    cpf: "37279015867",
    email: "dudu@gmail.com",
    fones:["559123456788","5587898566788"],

    dependentes: [{
    nome: "Joana",
    parentesco: "filha",
    dataNasc:"20/03/2002"
}]

}

cliente.dependentes.push({
    nome: "Samia",
    parentesco: "irmã",
    dataNasc: "20/03/2014"
})

console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "20/03/2014")

console.log(filhaMaisNova[0].nome)