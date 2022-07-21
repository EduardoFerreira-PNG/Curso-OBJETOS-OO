class Cliente {
    constructor(nome, cpf, email, saldo){
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }
    
  exibirSaldo(){
        console.log(this.saldo)
    }

  

}
 

class ClientePoupanca extends Cliente{
    constructor(nome, cpf, email, saldo, saldoPoup){
        super (nome, cpf, email, saldo)
        this.saldoPoup = saldoPoup
    }

    depositarPoup(valor){
        this.saldoPoup += valor
    }
}

const Eduardo = new ClientePoupanca ("Eduardo", "37278454899", "edu@gmail.com", 150, 250)

console.log(Eduardo)

Eduardo.depositar(150)
Eduardo.depositarPoup(150)

console.log(Eduardo)
