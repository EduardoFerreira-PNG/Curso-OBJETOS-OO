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


const Eduardo = new Cliente("Eduardo", "37279185898", "dudu@gmail", 200)
Eduardo.depositar(150)
console.log(Eduardo)