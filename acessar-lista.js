const cliente = {
    nome: "Eduardo",
    idade: 18,
    cpf: "37279015867",
    email: "dudu@gmail.com"
}

const chaves = ["nome", "idade", "cpf", "email"]


chaves.forEach(i => console.log(cliente[i]));