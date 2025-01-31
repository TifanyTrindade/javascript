// Classificar Idade
// Menor <
// Maior >
//Recebe =
var idade = 19
console.log(`Você tem ${idade} anos.`) //Serve pra mostrar a resposta do usuário.

if (idade <= 12) {
    console.log(`Você é Criança!`)
} else if (idade >= 12 && idade < 18) {
    console.log(`Você é Adolecente!`)
} else if (idade >= 18) {
    console.log(`Você é Adulto!`)
}
