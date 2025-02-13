
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