function Cliente (nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const Eduardo = new Cliente("Eduardo", "3727905544466", "eduardo@naves.com",200)

console.log(Eduardo)