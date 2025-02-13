const pessoa = {
    nome : "Luiz",
    sobrenome : "Eduardo",
    idade : 20,
    peso : 65,
    endereco:{
        logradouro : "Aven. Paulista",
        numero:5000
    }
}

//let nome = pessoa.nome

const{sobrenome , idade} = pessoa
const{nome:n , peso} = pessoa

console.log(sobrenome,idade)
console.log(n , peso)

const{endereco:{logradouro : l}} = pessoa
console.log(l)