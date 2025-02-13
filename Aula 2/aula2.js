// // Operadores Ternarios

// //var x = 3

// //const rest = x%2 == 0 ? "Par" : "Impar"
// //console.log(rest)

// // // se o numero > que 0 == positivo
// // //se o numero < que 0 == negativo
// // //se o numero = que 0 == Zero

// //var y = 9

// //const resul = y > 0 ? "Positivo" : y < 0 ? "Negativo" : "Zero" 
// //console.log(resul)

// // +----------------------------------------------------------------------------------------------------------------------+

// //Destruct

// // const pessoa = {
// //     nome : "Luiz",
// //     sobrenome : "Eduardo",
// //     idade : 20,
// //     peso : 65,
// //     endereco:{
// //         logradouro : "Aven. Paulista",
// //         numero:5000
// //     }
// // }

// // //let nome = pessoa.nome

// // const{sobrenome , idade} = pessoa
// // const{nome:n , peso} = pessoa
// // //
// // console.log(sobrenome,idade)
// // console.log(n , peso)
// // //
// // const{endereco:{logradouro : l}} = pessoa
// // console.log(l)

// // +----------------------------------------------------------------------------------------------------------------------+

// // concat

// //
// const alunos = ["Miguel" , "Pablo"]
// const alunas = ["Beatriz" , "Pamela"]

// const todos = alunos.concat(alunas)
// console.log(todos)

// //Adcionar um aluno no array
// alunos.push("Pedro")
// console.log(alunos)

// //Ordenar por ordem alfabetica
// const alunos1 = ["Miguel" , "Pablo" , "Abner" , "Caio" , "Pedro"]
// alunos1.sort()
// console.log(alunos1)

// // Deletar um item em um array

// //Irá tirar o == 'Pablo'

// delete alunos1[3]
// console.log(alunos1)

// //ultimo a ser apagado

// //Irá tirar o == 'Pedro'

// alunos1.pop()
// console.log(alunos1)


// //primeiro a ser apagado

// //Irá tirar o == 'Abner'

// alunos1.shift()
// console.log(alunos1)

// //deleta e adciona informações para o array

// //Irá tirar o == 'Miguel', <1 empty item>
// alunos1.splice(1,2) // o 2 é a quantidade de coisas que vc irá apagar 
// console.log(alunos1)

// // Adcionar

// alunos1.splice(1,2, "João", "Francisco" , "Erick" , "Luiz") // o 2 é a quantidade de coisas que vc irá apagar 
// console.log(alunos1)

// //Percorer a lista

// alunos1.forEach(function(nome,indice){
//     console.log(nome , indice)
// })

// +----------------------------------------------------------------------------------------------------------------------+

// fliter

const carros = [
    {
        modelo : "Corolla",
        preco:120000,
        ano:2024,
        flex:true
    },
    {
        modelo : "Civic",
        preco:170000,
        ano:2023,
        flex:false
    },
    {
        modelo : "Tiguam",
        preco:100000,
        ano:2022,
        flex:true

    },
    {
        modelo : "Corolla",
        preco:12000,
        ano:1970,
        flex:false

    }
]

// É flex

console.log(carros.filter(
    function(e){
        return e.flex
    }
))
// não é flex
console.log(carros.filter(
    function(e){
        return e.flex ==false
    }
))

// preço > 100.000

console.log(carros.filter(
    function(e){
        return e.preco > 100000 
    }
))

// preço > 100.000 e flex

console.log(carros.filter(
    function(e){
        return e.preco > 100000 && e.flex
    }
))