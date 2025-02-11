/*
//MOSTRADOR DE IDADE

let idade = 25
console.log(`Sua idade é ${idade} anos.`)

idade = idade + 5
console.log(`Sua idade é ${idade} anos.`)
*/

/*
//VERIFICADOR DE IDADE

let idade = 10
if(idade >= 18) {
    console.log(`Você é Maior de idade, Sua idade é ${idade} anos.`)
} else {
    console.log(`Você é menor de idade, Sua idade é ${idade} anos. `)
}
*/

/*
// VERIFICADOR DE SENHA

let senha = 1277
if(senha === 1234) {
    console.log(`Senha Correta!`)
} else (
    console.log(`Senha Incorreta!`)
)
*/

/*
//NÚMERO POSITIVO, NEGATIVO E ZERO

let n = 0
if(n > 0) {
    console.log(`${n} é um número POSITIVO!`)
} else if (n < 0) {
    console.log(`${n} é um número NEGATIVO!`)
}  else {
    console.log(`${n} este número é ZERO!`)
}
*/

// CALCULO DE IMC

let peso = 90
let altura = 1.60
let imc = peso / (altura * altura)

if(imc < 18.5) {
    console.log(`Vocês está ABAIXO do peso!`)
} else if (imc < 25) {
    console.log(`Seu peso é NORMAL!`)
} else if (imc < 30) {
    console.log(`Você está com SOBREPESO!`)
}  else {
    console.log(`Você está com OBESIDADE`)
}