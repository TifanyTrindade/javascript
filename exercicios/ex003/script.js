function calcular() {
    let n1 = document.getElementById('num1').value
    let n2 = document.getElementById('num2').value
    let soma = parseFloat(n1) + parseFloat(n2)

    document.getElementById('res').innerHTML = `A soma entre os números é ${soma}`

}