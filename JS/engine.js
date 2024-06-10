var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var pulando=0;
var diferenca = 2.3;
var chegouLimite = 0;

teclado = new Teclado(document);

var posicaoY = 390;

function personagem(){
    if(morto==0){
    if(pode==1){
        if(teclado.pressionada(W)&&pulando==0){
            pulando=1;
            coluna=0;
        } else if(teclado.pressionada(S)){
            posicaoY=435;
        }
    
    
    
        if(pulando==1){
            if(posicaoY>200&&chegouLimite==0){
                posicaoY-=diferenca;
            } else if(posicaoY<200&&chegouLimite==0){
                chegouLimite=1;
    
            }
            if (chegouLimite==1&&posicaoY<390){
                posicaoY+=diferenca;
                if(posicaoY>390){
                    chegouLimite=0;
                }
            }
    
            ctx.drawImage(JackPulando,116*coluna,0,116,168,30,posicaoY,100,100);
            
        } else if (pulando==0){
            chegouLimite=0;
            if(!teclado.pressionada(S)){
                posicaoY=390;
            }
            ctx.drawImage(jack,116*coluna,0,116,168,30,posicaoY,100,100);
            verificarColisao();
            }
        }
    }
}

function QualSprite(){
    if(morto==0){
        if(pulando==1){
            if(coluna<14){
                coluna+=1;
                console.log(coluna)
            } else if(coluna==14){
                coluna=0;
                pulando=0;
            }
        } else if (pulando==0){
            if(coluna<9){
                coluna+=1;
            } else if(coluna==9){
                coluna=0;
            }
        }
    }
}

setInterval(QualSprite,100);
