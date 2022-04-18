var altura = 0
var largura = 0
var vidas = 1
var tempo = 17

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel == 'HTML'){
    //1500
    criaMosquitoTempo = 1500
}else if(nivel == 'CSS'){
    //1000
    criaMosquitoTempo = 1000
}else if(nivel == 'Javascript'){
    //700
    criaMosquitoTempo = 700
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    //console.log(altura + ' x ' + largura)
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica(){
    //remover id mosquito anterior(caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        }else{
            document.getElementById('vida' + vidas).src="imagens/coracao_vazio.png"
            
            vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //console.log(posicaoX, posicaoY)

    //criar o elemento html

    var fotoMosquito = document.createElement('img')
    fotoMosquito.src = 'imagens/mosca.png'
    fotoMosquito.className = tamanhoMosquitoAleatorio() + ' ' + ladoMosquitoAleatorio()
    fotoMosquito.style.left = posicaoX + 'px'
    fotoMosquito.style.top = posicaoY + 'px'
    fotoMosquito.style.position = 'absolute'
    fotoMosquito.id = 'mosquito'
    fotoMosquito.onclick = function(){
        this.remove()
    }
    
    document.body.appendChild(fotoMosquito)
}

function tamanhoMosquitoAleatorio() {
    var tamMosquito = Math.floor(Math.random() * 3)
    
    switch(tamMosquito){
        case 0: 
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }

}

function ladoMosquitoAleatorio(){
    var tamMosquito = Math.floor(Math.random() * 2)
    
    switch(tamMosquito){
        case 0: 
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

