var altura = 0
var largura = 0

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
    
    document.body.appendChild(fotoMosquito)

    //console.log(tamanhoMosquitoAleatorio())
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