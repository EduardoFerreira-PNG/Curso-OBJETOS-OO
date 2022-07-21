function Cliente (nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function clientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const Eduardo = new clientePoupanca("Eduardo", "355887798857", "email", 100, 350)

console.log(Eduardo)

clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

Eduardo.depositarPoup(250)

console.log(Eduardo.saldoPoup)

class constructor {
    
}