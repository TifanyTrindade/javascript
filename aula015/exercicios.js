// Soma entre números da mesma Váriavel
let n = [5, 9, 7, 3, 1]
let res = (n[0] + n[1])
n[5] = 8

console.log(n)

console.log(`(Posição 0: ${n[0]}) + (Posição 4: ${n[1]}) = ${res}`)
if( res >= 10) {
    console.log('Número com duas casas!')
} else {
    console.log('Número com um casa!')
}

