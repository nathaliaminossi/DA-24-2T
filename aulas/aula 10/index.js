/*
let condicao1 = true 

if(condicao1){

//acao

console.log("exibiu condicao1")

    }


let condicao2 = false
if(condicao2){
//acao
console.log("exibiu condicao2")


    }

   const num1= Number(prompt("digite o primeiro numero"))
   const num2= Number(prompt("digite o segundo numero"))
   
   if(num1===num2)
    console.log("os numeros sao iguais")
*/
/*
let condicao = false
if(condicao){
console.log("a condicao é verdadeira")

}else{
console.log("a condicao é falsa")

}


const num1= Number(prompt("digite o primeiro numero"))
const num2= Number(prompt("digite o segundo numero"))
if(num1===num2){
console.log("os numeros sao iguais")

}else{

console.log("os numeros sao diferentes")

}

*/
/*
let condicao1= false
let condicao2= false

if(condicao1){
    
    console.log("condicao1 verdadeiro")
}else if(condicao2){  
    console.log("condicao2 é verdadeira")
    
}else{
 console.log("entrou no else")   

}
*/
/*
const num1= Number(prompt("digite o primeiro numero"))

const num2= Number(prompt("digite o segundo numero"))

if(num1===num2){
console.log("os numero sao iguais")
}else if(num1>num2){

console.log("o primeiro numero1 é maior que o segundo numero2?")

}else{

    console.log("o numero1 é menor que o nuemro2")


}

*/
/*
let paisDeOrigem = prompt("digite o pais de origem")
switch(paisDeOrigem){
case "Brasil":
console.log("Brasileiro")
break

case "EUA":
 console.log("Norte Americano")
 break
 case "Inglaterra":
    console.log("Ingles")
break

default:
    console.log("Nenhuma nacionalidade encontrada")


}
*/
/*
let tiposPokemon= prompt("digite o nome do pokemon")
switch(Pokemon){
case "Bulbasaur":
console.log("o pokemon escolhido foi o Bulbasaur do tipo Planta e Veneno")
break




}

*/
/*
let Hogwarts = prompt("digite o nome da aluna")
switch (Hogwarts) {

    case "Hermione":
        console.log("Grifinoria")

        break


    case "Ana":
        console.log("Lufa-Lufa")

break 

case "Luna":
    console.log("Corvinal")

    break

case "Narcisa":
    console.log("Sonserina")
break

default:
    console.log("nenhuma casa encontrada")



}
*/
/*
let condicao1 = true
let condicao2 = false

if(condicao1 && condicao2){

console.log("As duas condicoes sao verdadeiras")
}else{
console.log("Alguma condicao é falsa")
}

if(condicao1 || condicao2){
console.log("As duas condicoes sao verdadeiras")
}else{

    console.log("todas sao falsas")

}
if(!condicao1){
console.log("a condicao1 é falsa")
}else{
    console.log("a condicao1 é verdadeira")

}
*/
let condicao1 

let ensinoMedio = prompt("voce concluiu o ensino medio?")
let idade = prompt("qual a sua idade?")
let outraFaculdade = prompt("voce esta cursando outra faculdade?")

switch(ensinoMedio){
case "sim": 
condicao1=true
break
case "nao":
    condicao1= true
}



if(ensinoMedio && idade && outraFaculdade){

console.log("Voce pode estudar nessa faculdade.")
}else{
    console.log("voce nao pode estudar nessa faculdade.")

}








































