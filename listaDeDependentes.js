const clientes = [
        {
        nome: "Eduardo",
        cpf: "37279015867",
        dependentes: [{
            nome: "Joana",
            parentesco: "filha",
            dataNasc: "20/03/2002",
          },
          {
            nome: "Samia",
            parentesco: "irmã",
            dataNasc: "20/03/2014"
        }],
        
      },
      {
        nome: "Aline",
        cpf: "37888715867",
        dependentes: [{
            nome: "Joao",
            parentesco: "filho",
            dataNasc: "20/03/2002",
          },
          {
            nome: "Gabriel",
            parentesco: "irmão",
            dataNasc: "20/03/2014"
        }],

      },
]

        const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

        console.log(listaDependentes)