//desafio
function c(a,b,o){return o=="+"?a+b:o=="-"?a-b:o=="*"?a*b:o=="/"?a/b:"Operação inválida"}
console.log(c(10,5,"+"));

//maior
function calculadora(numb1, numb2, operacao) {
    if (operacao === "+") {
        return numb1 + numb2;
    } else if (operacao === "-") {
        return numb1 - numb2;
    } else if (operacao === "*") {
        return numb1 * numb2;
    } else if (operacao === "/") {
        return numb1 / numb2;
    } else {
        return "Operação inválida";
    }
}

console.log(calculadora(10, 5, "+")); // Output: 15