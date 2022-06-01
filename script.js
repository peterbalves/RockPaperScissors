let elementos = document.querySelectorAll('.player-options div > img');
let playerOpt = "";
let inimigoOpt = ""
let enemyOptions = document.querySelectorAll('.enemy-options div');
let resetarOpacidadeInimigo = ()=>{ 
    for(let i = 0; i < enemyOptions.length; i++) {

         enemyOptions[i].childNodes[0].style.opacity = 0.2;
    
    }
}


let inimigoJogar = ()=>{
    const rand = Math.floor(Math.random()*3);
    resetarOpacidadeInimigo();

    for(let i = 0; i < enemyOptions.length; i++){
        if(i == rand) {
            enemyOptions[i].childNodes[0].style.opacity = 1.5;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt')
        }
    }
    if(playerOpt == 'pedra' && inimigoOpt == 'pedra'){
        alert('Empate ambos colocaram pedra');
    } else if(playerOpt == 'papel' && inimigoOpt == 'papel'){
        alert('Empate ambos colocaram papel');
    } else if(playerOpt == 'tesoura' && inimigoOpt == 'tesoura'){
        alert('Empate ambos colocaram tesoura');
    } else if(playerOpt == 'pedra' && inimigoOpt == 'tesoura'){
        alert('Voce ganhou, Pois colocou Pedra e eu coloquei Tesoura');
    } else if(playerOpt == 'pedra' && inimigoOpt == 'papel'){
        alert('Voce perdeu pois colocou Pedra e eu coloquei Papel');
    } else if(playerOpt == 'papel' && inimigoOpt == 'pedra') {
        alert('Voce ganhou, Pois colocou Papel e eu coloquei Pedra')
    } else if(playerOpt == 'papel' && inimigoOpt == 'tesoura'){
        alert('Voce perdeu, Pois colocou Papel e eu Tesoura');
    } else if(playerOpt == 'tesoura' && inimigoOpt == 'papel'){
        alert('Voce ganhou, Pois colocou Tesoura ganha de papel');
    } else if(playerOpt == 'tesoura' && inimigoOpt == 'pedra'){
        alert('Voce perdeu, Pois colocou Tesoura e eu Pedra')
    }
}


let resetarOpacidadePlayer = ()=>{
    for(let i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.2;
    }
}



for(let i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click', (recuperar)=>{
        resetarOpacidadePlayer();
        recuperar.target.style.opacity = 1.5;
        playerOpt = recuperar.target.getAttribute('opt');

        inimigoJogar();
        
    });
}
