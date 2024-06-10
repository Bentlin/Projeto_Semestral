var imgGO = new Image();
imgGO.src = "IMG/GAME OVER.png"
var pontos = 0;
var morto =0;

function verificarColisao() {
    // Coordenadas do personagem
    var personagemX = 30;
    var personagemY = posicaoY;
    var personagemLargura = 116;
    var personagemAltura = 168;

    // Coordenadas do obstáculo
    var obstaculoX = xObs;
    var obstaculoY = yObs;
    var obstaculoLargura = ObsW;
    var obstaculoAltura = ObsH;

    // Verifica se houve colisão
    if (
        personagemX < obstaculoX + obstaculoLargura &&
        personagemX + personagemLargura > obstaculoX &&
        personagemY < obstaculoY + obstaculoAltura &&
        personagemY + personagemAltura > obstaculoY
    ) {
morto=1;
pontos=pontuacao;
console.log(morto)
    }
}

