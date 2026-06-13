const mensagem = `
LITTLE KITTY,
Em um mundo tão grande, de alguma forma nossos caminhos se encontraram. E isso foi o melhor dia da minha vida.

E, desde então, até os dias mais simples ganharam um brilho diferente. Cada conversa, cada sorriso e cada pequeno instante ao seu lado se tornaram lembranças que quero guardar para sempre.

Hoje não é apenas uma data especial. É mais uma página da nossa história, construída com carinho, respeito, risadas e um amor que cresce em cada detalhe.

Se eu pudesse fazer um único pedido, seria viver infinitos pequenos momentos ao seu lado, porque descobri que o meu lugar favorito não é um lugar...
é você. ♡

Muito obrigado por existir!.

AMOOO-TE MUCHO<3`
;

let indice = 0;

function abrirCarta(){
    document.getElementById("envelopeContainer").style.display = "none";
    document.getElementById("loveLetter").style.display = "block";

    const texto = document.getElementById("typingText");
    texto.innerHTML = "";
    indice = 0;

    function escrever(){
        if(indice < mensagem.length){
            texto.innerHTML += mensagem.charAt(indice);
            indice++;
            setTimeout(escrever, 30);
        }
    }

    escrever();
}

function fecharCarta(){
    document.getElementById("loveLetter").style.display = "none";
    document.getElementById("envelopeContainer").style.display = "block";
}