// //crie uma arrow function que recebe dois numeros como paremetros e retorne o produto desses numeros
// const product = (num1, num2) => num1 *num2;
// console.log(product(3,4))

// // crie uma função que recebe dois números e retorne a soma , subtração , multiplicação e divisão desses numeros em um objeto

// function cal( n1 , n2  ){
//     return{
//         soma : n1+n2,
//         subtracao : n1-n2,
//         multiplicacao : n1*n2,
//         divisao : n1/n2
//     }
// }
// console.log(ca( 2 , 4))

// //

const pessoas =[
{
    nome : "João", 
    idade : 25,
    profissao : "Desenvolvedor" 
},
{
    nome : "Maria", 
    idade : 17,
    profissao : "Designer" 
},
{
    nome : "Carlos", 
    idade : 30,
    profissao : "Desenvolvedor" 
}
,{
    nome : "João", 
    idade : 22,
    profissao : "Desenvolvedor" 
}
]

function verificaDev(pessoas){
    return pessoas.filter(({nome , idade , profissao}) =>{
        return idade >= 18 && profissao == "Desenvolvedor"
    })
}
console.log(verificaDev(pessoas))