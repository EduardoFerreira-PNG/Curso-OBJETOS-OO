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

  
  
  function seguros(obj){
      const propsClientes = Object.keys(obj);
        if(propsClientes.includes("dependentes")){
            console.log(`Oferta de seguro de vida para ${obj.nome}`);
        }
  }

  console.log(Object.entries(cliente))
  seguros(cliente)