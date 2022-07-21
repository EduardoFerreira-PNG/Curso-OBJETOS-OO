const cliente = {
    nome: "Eduardo",
    idade: 18,
    cpf: "37279015867",
    email: "dudu@gmail.com",
    fones: ["559123456788", "5587898566788"],
  
    dependentes: [
      {
        nome: "Joana",
        parentesco: "filha",
        dataNasc: "20/03/2002"},
      {
        nome: "Samia",
        parentesco: "irmã",
        dataNasc: "20/03/2014"},
    ],
    saldo:100,
    depositar: function(valor) {
      this.saldo += valor
    }
  }

  let relatorio = "";

  for (let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function" )
    {
        continue
    }else{
        relatorio += ` 
        ${info} - ${cliente[info]} 
        `
    }

  }

  console.log(relatorio)