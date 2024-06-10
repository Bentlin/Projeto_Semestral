var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var fundo = new Image();
fundo.src = "IMG/CF.png";
var xCF1 = 0;
var xCF2 = 547;
var velocidadeFundo = 2;
var velocidadeObstaculos = 3;
var intervaloVelocidade = 88888;
var jogoIniciado = false;
var pontuacao = 0;
var tempoDecorrido = 0;
var passarInterval;
var desenharInterval;
var gameAudio = document.getElementById('game_audio');
var pode=0;

function aumentarVelocidadeFundo() {
    velocidadeFundo += 0.01; // Aumenta a velocidade do fundo
    velocidadeObstaculos += 0.01; // Aumenta a velocidade dos obstáculos
}


function iniciarJogo() {
    document.getElementById('start_screen').style.display = 'none';
    document.getElementById('canvas').classList.remove('hide');
     

    var imagemInicial = new Image(); // Criar elemento de imagem
    imagemInicial.src = 'imgs/CONTROLE.png'; // Definir o caminho da imagem

    setTimeout(function() {
        
        ctx.drawImage(imagemInicial, 0, 0, canvas.width, canvas.height);

        setTimeout(function() {
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            
            iniciarAnimacaoImagens();
        }, 3000); 
    }, 10); 
}

function iniciarAumentoVelocidade() {
    setInterval(function() {
        aumentarVelocidadeFundo(); // Aumenta a velocidade do fundo e dos obstáculos
    }, intervaloVelocidade);
}

function mostrarCreditos() {
    document.getElementById('start_screen').style.display = 'none';
    document.getElementById('credits_screen').classList.remove('hide');
}

function voltarParaInicio() {
    document.getElementById('credits_screen').classList.add('hide');
    document.getElementById('start_screen').style.display = 'flex';
}

function FundoPassante() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
if(morto==0){
    ctx.drawImage(fundo, xCF1, 0, canvas.width, canvas.height);
    ctx.drawImage(fundo, xCF2, 0, canvas.width, canvas.height);
    personagem();
    xCF1 -= velocidadeFundo; 
    xCF2 -= velocidadeFundo; 

    if (xCF1 * (-1) > canvas.width) {
        xCF1 = 0;
        xCF2 = 547;
    }
    ObtVindo();

    if (!jogoIniciado) {
        jogoIniciado = true;
        iniciarPontuacao();
        document.getElementById('pontuacao').classList.remove('hide');
    }
} else if (morto==1){
    ctx.drawImage(imgGO,0,0);
    ctx.save();
    ctx.fillStyle = "white";
    ctx.font = "bold 65px sans-serif";
    ctx.fillText(pontos,230,410);
    ctx.restore();
}
}

function iniciarPontuacao() {
    setInterval(function() {
        tempoDecorrido++;
        pontuacao = tempoDecorrido * 1;
        atualizarPontuacao();
    }, 100);
}

function atualizarPontuacao() {
    if(morto==0){
        var pontuacaoElemento = document.getElementById("pontuacao");
        pontuacaoElemento.textContent = "SCORE: " + pontuacao;
    }
    
}

var Obs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var Obg = 1;
var obstacu = new Image();
obstacu.src = "IMG/CarroCinza2.png";
var xObs = canvas.width;
var yObs = 400;
var ObsW = 180;
var ObsH = 90;

function Obstaculo() {
    Obg = Math.floor(Math.random() * 10 + 1);

    if (Obg == 1) {
        obstacu.src = "IMG/Cachorro2.png";
        ObsW = 90;
        ObsH = 50;
        yObs = 450;
    } else if (Obg == 2) {
        obstacu.src = "IMG/Moto2.png";
        yObs = 400;
        ObsW = 140;
        ObsH = 90;
    } else if (Obg == 3) {
        obstacu.src = "IMG/Onibus2.png";
        yObs = 350;
        ObsW = 200;
        ObsH = 150;
    } else if (Obg == 4) {
        obstacu.src = "IMG/Pipa2.png";
        yObs = 170;
        ObsW = 100;
        ObsH = 240;
    } else if (Obg == 5) {
        obstacu.src = "IMG/CarroCinza2.png";
        yObs = 400;
        ObsW = 180;
        ObsH = 90;
    } else if (Obg == 6) {
        obstacu.src = "IMG/Cone.png";
        yObs = 420;
        ObsW = 65;
        ObsH = 65;
    } else if (Obg == 7) {
        obstacu.src = "IMG/Caixa.png";
        yObs = 420;
        ObsW = 100;
        ObsH = 65;
    } else if (Obg == 8) {
        obstacu.src = "IMG/CarroAmarelo2.png";
        yObs = 400;
        ObsW = 180;
        ObsH = 90;
    } else if (Obg == 9) {
        obstacu.src = "IMG/CarroVermelho2.png";
        yObs = 400;
        ObsW = 180;
        ObsH = 90;
    }
    setInterval(aumentarVelocidadeFundo, intervaloVelocidade);
}

function ObtVindo() {
    ctx.drawImage(obstacu, xObs, yObs, ObsW, ObsH);
    xObs -= velocidadeObstaculos;
    if (xObs < -250) {
        xObs = canvas.width;
        Obstaculo();
    }
}

function iniciarAnimacaoImagens() {
    document.getElementById('skip_button').classList.remove('hide');
    if (!jogoIniciado) {
        pode=1;
        var qual = 0;
        var quem = 0;
        var imagensA = [];
        var imagensJ = [];
        var imagensJ2 = [];
        var imagensE = [];

        // Carregar as imagens
        for (let i = 0; i < 24; i++) {
            let imgJ = new Image();
            imgJ.src = 'IMG3/j' + i + '.png';
            imagensJ[i] = imgJ;
        }

        for (let i = 0; i < 18; i++) {
            let imgA = new Image();
            imgA.src = 'IMG3/A' + i + '.png';
            imagensA[i] = imgA;
        }

        for (let i = 0; i < 11; i++) {
            let imgJ2 = new Image();
            imgJ2.src = 'IMG3/K' + i + '.png';
            imagensJ2[i] = imgJ2;
        }

        for (let i = 0; i < 22; i++) {
            let imgE = new Image();
            imgE.src = 'IMG3/E' + i + '.png';
            imagensE[i] = imgE;
        }

        function passar() {
            qual += 1;
            if (quem == 0 && qual >= 24) {
                quem = 1;
                qual = 0;
            } else if (quem == 1 && qual >= 18) {
                quem = 2;
                qual = 0;
            } else if (quem == 2 && qual >= 11) {
                quem = 3;
                qual = 0;
            } else if (quem == 3 && qual >= 22) {
                clearInterval(passarInterval); // Para o intervalo de passar
                clearInterval(desenharInterval); // Para o intervalo de desenhar
                // Iniciar o fundo passante e obstáculos após a animação

                iniciarFundoPassante();
                pode=1;
            }
        }
        passarInterval = setInterval(passar, 170);

        function desenhar() {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas antes de desenhar

            if (quem == 0 && qual < imagensJ.length) {
                ctx.drawImage(imagensJ[qual],  0, 0, 547, 544);
            } else if (quem == 1 && qual < imagensA.length) {
                ctx.drawImage(imagensA[qual],  0, 0, 547, 544);
            } else if (quem == 2 && qual < imagensJ2.length) {
                ctx.drawImage(imagensJ2[qual],  0, 0, 547, 544);
            } else if (quem == 3 && qual < imagensE.length) {
                ctx.drawImage(imagensE[qual], 0, 0, 547, 544);
            }
        }
        desenharInterval = setInterval(desenhar, 100);
    }
}

function iniciarFundoPassante(pularAnimacao) {
    gameAudio.play();
    if (!jogoIniciado) {
        document.getElementById('skip_button').classList.add('hide'); // Esconde o botão pular
        setInterval(FundoPassante, 10);
        if (pularAnimacao) {
            FundoPassante();
        }
    }
}

function pularAnimacao() {
    clearInterval(passarInterval); // Para o intervalo de passar
    clearInterval(desenharInterval); // Para o intervalo de desenhar
    if (!jogoIniciado) {
        iniciarFundoPassante(true); // Inicia a tela passante pulando a animação
    }
}
if (quem == 3 && qual >= 22) {
    clearInterval(passarInterval); // Para o intervalo de passar
    clearInterval(desenharInterval); // Para o intervalo de desenhar
    // Iniciar o fundo passante e obstáculos após a animação
    iniciarFundoPassante(false); // Não pula a animação
}
// Função para iniciar o jogo quando o botão "Jogar" for clicado
document.getElementById('start_button').addEventListener('click', iniciarJogo);

function morreu(){
    if(morto==1){
        pontos = pontuacao;
        ctx.drawImage(imgGO,0,0);
       
    }
}

setInterval(morreu,100);