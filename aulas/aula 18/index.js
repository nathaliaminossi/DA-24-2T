
/*
const filme = {
nome: "Auto da Compadecida",
ano: 2000,
elenco: ["Matheus Nachtergaele", "Selton Mello", "Denise Fragra", "Virginia Cavendish"],
transmissoesHoje: [
{canal: "Telecine", horario:"21h"},
{canal: "Canal Brasil", horario: "19h"},
{canal: "Globo", horario: "14h"}
]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length -1])
console.log(filme.transmissoesHoje[2])

//a) vai imprimir o nome de duas pessoas do elenco "Matheus Nachtergaele" e "Virginia Cavendish" e imprimiu o canal "GLOBO" e o horario "14h"

const cachorro = {
nome: "Juca",
idade: 3,
raca: "SRD"

}

const gato = {...cachorro, nome: "Juba"}
const tartaruga = {...gato, nome: gato.nome.replaceAll("a","o")}


console.log(cachorro)
console.log(gato)
console.log(tartaruga)

//a) será impresso no console o nome 'Juca' a idade '3' e a raca 'SRD', na próxima será 'juba' sua idade '3' e a raca 'SRD', por último por conta do replaceAll trocará o 'a' pelo o 'o', entao será impresso 'Jubo', idade '3' , raca 'SRD'
//b) a sintaxe dos 3 pontos copia as propriedades do cachorro 



function minhaFuncao(objeto, propriedade){
return objeto[propriedade]
}
const pessoa = {
nome: "Caio",
idade: 23,
backender: false

}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

//a) false undefined
//b) o valor impresso é 'false' porque o objeto 'pessoa' tem uma propriedade chamada 'backender' e o valor dela está definido como 'false'


const pessoa = {
nome: "Nathalia Minossi",
apelidosN: ["Nathy", "Natica", "Nana"]

}
console.log("Eu sou a Nathalia e meus apelidos são:", pessoa.apelidosN[0], pessoa.apelidosN[1], pessoa.apelidosN[2])

const pessoaN = {
    
 pessoaN:{...pessoa, nome: "Nathalia Minossi",},

 apelidosNovos: ["Nathyzinha", "Bebe do pai", "Amor do pai"]
}
console.log(pessoaN)





const pessoa1 = {
nome: "Miguel",
idade: 16,
profissao: "Programador"
}

const pessoa2 = {
nome: "Pedro",
idade: 15,
profissao: "Engenheiro"
}

console.log(pessoa1)
 console.log(pessoa2)
function mesmaFuncao(objeto){

const array1 = []
array1.push(objeto.nome)
array1.push(objeto.nome.length)
array1.push(objeto.idade)
array1.push(objeto.profissao)
array1.push(objeto.profissao.length)
return array1

}
console.log(mesmaFuncao(pessoa1))

console.log(mesmaFuncao(pessoa2))


const carrinho = []


const uva1 = {
nome: "uva",
disponibilidade: true

}

const morango2 = {
nome: "morango",
disponibilidade: true
}

const banana3 = {
nome: "banana",
disponibilidade: true

}


function comprarFrutas(objeto){

carrinho.push(objeto)
}
comprarFrutas(uva1)
comprarFrutas(morango2)
comprarFrutas(banana3)

console.log(carrinho)
*/

function usuario() {

    const nome = prompt("Qual seu nome?")
    const idade = prompt("Qual sua idade?")
    const profissao = prompt("Qual sua profissao?")

    const objeto = {
        nomeObjeto: nome,
        idadeObjeto: idade,
        profissaoObjeto: profissao
    }
    console.log(objeto)
    console.log(typeof(objeto))
}
usuario()