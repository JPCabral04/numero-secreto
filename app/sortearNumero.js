const valorMin = 1;
const valorMax = 1000;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * valorMax + 1);
}

console.log(numeroSecreto);

const menorValor = document.getElementById('menor-valor');
menorValor.innerHTML = valorMin;

const maiorValor = document.getElementById('maior-valor');
maiorValor.innerHTML = valorMax;

