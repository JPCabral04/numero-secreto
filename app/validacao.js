function verificarValidadeChute() {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML+='<div>Valor inválido: Não é um número inteiro</div>';
        return;
    } 

    if (numeroForaDoIntervalo(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Número fora do intervalo ${valorMin} e ${valorMax}</div>`;
        return;
    }

    if(numero == numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você Acertou!</h2>
            <h3>O número secreto era ${numeroSecreto} </h3>
        `
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor que ${numero} <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior que ${numero} <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForaDoIntervalo(numero) {
    return numero > valorMax || numero < valorMin;
}
