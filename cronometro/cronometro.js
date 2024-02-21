function ativarContagem(){
    tempo = setInterval(function(){
        cronometro =parseInt(document.getElementById("resultado").innerHTML);
        cronometro += 1;
        document.getElementById("resultado").innerHTML = cronometro;
    }, 1000);
}

function pararContagem(){
    clearInterval(tempo);
}

function reiniciarCronometro(){
    pararContagem();
    document.getElementById("resultado").innerHTML = 0;
}