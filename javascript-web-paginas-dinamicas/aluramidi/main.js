function tocaSom (seletorAudio){
    const elemmento = document.querySelector(seletorAudio);

    if(elemmento && elemmento.localName ==='audio'){
        elemmento.play();
    }
    else{
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string:

    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code == 'Enter'){
            tecla.classList.add('ativa');
        }
        else{

        }
        
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}