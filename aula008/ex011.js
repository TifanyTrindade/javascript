var idade = 13
console.log(`Você tem ${idade} anos`)
if (idade < 16) { // < Menor
    console.log('Não vota!')
} else if (idade < 18 || idade > 65) { // > Maior
    console.log('Voto opcional')
    } else {
        console.log('voto obrigatório')
    }