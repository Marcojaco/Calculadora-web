const primeiroN = document.getElementById('primeiroN')
const segundoN = document.getElementById('segundoN')
const operacao = document.getElementById('selecao')
const resposta = document.getElementById('resultado')
const popup = document.getElementById('popup')
const popupText = document.getElementById('popupText')

function abrirPopup(valor) {
    popupText.innerText = valor
    popup.style.display = 'block'
}

function fecharPopup(abrirPopup) {
    popup.style.display = 'none'
}

resposta.addEventListener('click', function() {
    const valor1 = Number(primeiroN.value)
    const valor2 = Number(segundoN.value)
    const op = operacao.value

    let res

    if  (op === '+') {
        res = valor1 + valor2
    }
    else if (op === '-') {
        res = valor1 - valor2
    }
    else if (op === '*') {
        res = valor1 * valor2
    }
    else if (op === '/') {
        res = valor1 / valor2
    }else {
        res = 'erro'
    }

    abrirPopup(res)
})


