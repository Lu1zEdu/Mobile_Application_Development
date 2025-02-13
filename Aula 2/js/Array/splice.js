
const alunos = ["Miguel" , "Pablo" , "Abner" , "Caio" , "Pedro"]


//deleta e adciona informações para o array

//Irá tirar o == 'Miguel', <1 empty item>
alunos1.splice(1,2) // o 2 é a quantidade de coisas que vc irá apagar 
console.log(alunos)

// Adcionar

alunos1.splice(1,2, "João", "Francisco" , "Erick" , "Luiz") // o 2 é a quantidade de coisas que vc irá apagar 
console.log(alunos1)