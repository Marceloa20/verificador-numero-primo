// selecionando elementos do HTML
let formulario = document.querySelector("#formulario")
let inputNumero = document.querySelector("#numero")
let resposta = document.querySelector("#resultado")
let btnLimpar = document.querySelector("#limpar")

// Escutador de evento no formulario 
formulario.addEventListener("submit", (event) => {
    // Previnindo envio do formulario padrao
    event.preventDefault()

    let numeroDigitado = Number(inputNumero.value)
    
    if (validarNumero(numeroDigitado)) {
        numeroPrimo(numeroDigitado)
        mostrarDivisores(numeroDigitado)
    }
    
})

btnLimpar.addEventListener("click", () => {
    inputNumero.innerHTML = "" // remove o numero digitado
    resposta.innerHTML = "" 
    resposta.className = "" // remove as classes anteriores
})


// Função para validar número
function validarNumero(numero) {
    if(numero <= 1) {
        resposta.innerHTML = "Digite um número maior que 1"
        resposta.className = "resultado erro"
        return false // se o número for menor ou igual a 1, interrompe
    }
    return true // só continua se o número for válido
}

// Função para verificar se o número é primo ou não
function numeroPrimo(numero) {
    for(let i = 2; i <= Math.sqrt(numero); i++) {
        if(numero % i === 0) {
            resposta.innerHTML = "Número não é primo"
            resposta.className = "resultado nao-primo"
            return
        } 
    }
    resposta.innerHTML = "Número é primo"
    resposta.className = "resultado primo"
}

// Função para mostrar os divisores 
function mostrarDivisores(numero) {
    let divisores = [] // cria um array vazio

    // itera de 1 até o número e verifica se o resto da divisão por cada numero do laço é zero
    for(let i = 1; i <= numero; i++) {
        if(numero % i === 0) {
            divisores.push(i) // adiciona os numeros que são divisores no final no array
        }
    }
    resposta.innerHTML+= `<br>Divisores: ${divisores.join(', ')}`
}