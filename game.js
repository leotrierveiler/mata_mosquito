var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 60;
var criaMosquitoTempo = 1500;

var nivelJogo = window.location.search;
nivelJogo = nivelJogo.replace('?', '');

if (nivelJogo === 'normal') {
    criaMosquitoTempo = 1500;
} else if (nivelJogo === 'dificil') {
    criaMosquitoTempo = 1000;
} else if (nivelJogo === 'impossivel') {
    criaMosquitoTempo = 750;
}

function ajustaTamanhoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura);
}

ajustaTamanhoJogo()

var cronometro = setInterval (
    function () {
        tempo--; 
        if (tempo < 0) {
            clearInterval(cronometro);
            clearInterval(criacaoMosquito);
            window.location.href = 'vitoria.html';
        } else { 
            document.getElementById('tempoRestante').innerHTML = tempo;
        }
    },1000);

function posicaoMosquitoAleatoria() {

    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();

        if (vidas > 2) {
            window.location.href = 'fim_de_jogo.html'
        } else {
        document.getElementById('vida' + vidas).src='imagens/coracao_vazio.png';
        vidas++;
        }
    }


    var posicaoX = Math.floor(Math.random() * largura) - 150;
    var posicaoY = Math.floor(Math.random() * altura) - 150;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    var mosquitoDinamico = document.createElement('img');
    mosquitoDinamico.src = 'imagens/mosquito.png';
    mosquitoDinamico.className = tamanhoMosquitoAleatorio() + ' ' + direcaoMosquitoOlhando();
    mosquitoDinamico.style.left = posicaoX + 'px';
    mosquitoDinamico.style.top = posicaoY + 'px';
    mosquitoDinamico.style.position = 'absolute';
    mosquitoDinamico.id = 'mosquito'
    mosquitoDinamico.onclick = function (){
        this.remove();
    }

    document.body.appendChild(mosquitoDinamico);
}

function tamanhoMosquitoAleatorio() {
    var classe = Math.floor(Math.random() * 4);
    switch (classe) {
        case 0:
            return 'mosqutoExtraPequeno';
        case 1:
            return 'mosquitoTamanhoPequeno';
        case 2:
            return 'mosquitoTamanhoPadrao';
        case 3:
            return 'mosquitoTamanhoGrande';
    }
}

function direcaoMosquitoOlhando () {
    classe = Math.floor(Math.random() * 2);

    switch (classe) {
        case 0:
            return 'olhandoDireita';
        case 1:
            return 'olhandoEsquerda';
    }
}