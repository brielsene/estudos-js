
function ativarContagem(){
    // document.getElementById("tempo").innerHTML = "Começou a contar";
    // //ativa a função apenas uma vez quando der o tempo especificado
    // tempo = setTimeout(function(){
    //     document.getElementById("tempo").innerHTML = "Executou o set time out();"

    // }, 5000);



    tempo = setInterval(function(){
        var cronometro = document.getElementById("tempo").innerHTML;
        var cronometroInt = parseInt(cronometro) - 1;
        if(cronometroInt === -1){
            pararContagem();
            document.getElementById("tempo").innerHTML = 5;
            

        }else{
            document.getElementById("tempo").innerHTML = cronometroInt;
        }
        
    },1000);

}

function pararContagem(){
    //parou a contagem
    // clearTimeout(tempo);
    // document.getElementById("tempo").innerHTML = "Parou a contagem";

    //-------------------------------------------

    clearInterval(tempo);
    
}