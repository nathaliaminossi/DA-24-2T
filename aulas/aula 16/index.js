
/*
function imprimirOlaMundo(){
console.log("Olá Mundo!")

}
imprimirOlaMundo()

*/
/*
function calculaArea(altura, largura){
const area = altura * largura
return area
}

const areaCalculada = calculaArea(2, 3)
console.log(calculaArea(2, 3))
*/
/*
const calculaArea = function(altura, largura){
const area = altura * largura
return area


}
const areaCalculada = calculaArea(2, 3)
*/
/*
const calculaArea = (altura, largura) => {
 const area = altura * largura
return area

    }

const areaCalculada = calculaArea(2, 3)
/*
function minhaFuncao(variavel){
return variavel * 5

}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))


// a) vamos chamar a minhaFuncao(2) e multiplicar pelo 5, imprimindo no console o valor de 10
//com o 10 a mesma coisa, multiplicando por 5 e o resultado imprimido sera 50.
// b) se retirasmos o console.log o resultado do calculo nao sera impresso.

*/
/*
let textoDoUsuario = prompt("insira um texto");
const outraFuncao = function(texto){
return texto.toLowerCase().includes("cenoura")
}
const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//a) primeiro recebe um texto e verifica se tem a palavra "cenoura"
// o toLowerCase transforma todo texto em minusculo para que nao afete a busca pela palavra
// o includes verifica se a palavra "cenoura" esta no texto
//e por fim, retorna true se a palavra estiver no texto e false se nao estiver

//b) 1. Eu gosto de cenoura = true
//   2. CENOURA é bom pra vista = true 
//   3. Cenouras crescem na terra = false
*/
/*
function informacoesPessoais(){
    let nome = "Nathalia"
    let idade = "16"
    let cidade = "Esteio"
    let estudante = "Estudante"

    console.log("Eu sou", nome, "tenho", idade, "anos, moro em", cidade, "e", estudante)
}

informacoesPessoais()
*/
/*
function somarNumeros(a, b){
return a + b

}
const resultado = somarNumeros(7, 20)
console.log(resultado)
*/
// numeros inseridos 30 e 3
// soma: 33
// diferenca: 27
// multiplicacao: 90
// 10

let numeros = prompt("insira dois numero:")

function somarNumeros(a, b){
return a + b


}

function multiplicarNumeros(a, b){
return a * b


}

function dividirNumeros(a, b){
return a / b


}
 
function diminuirNumeros(a, b){

return a - b

}

const resultado = somarNumeros(5,10)
console.log(resultado)


const resultado2 = multiplicarNumeros(5,10)
console.log(resultado2)

const resultado3 = dividirNumeros(5,10)
console.log(resultado3)

const resultado4 = 
