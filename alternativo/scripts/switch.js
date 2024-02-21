

function verificaCor(){
    let cor = document.getElementsByName("cor")[0].value;
    //conversão para tudo minúsculo
    cor = cor.toLowerCase();
    console.log(cor);
    switch(cor){
        case "azul":
            document.body.style.backgroundColor = "blue";
            break;
        case "verde":
            document.body.style.backgroundColor = "green";
            break;
        default :
             document.body.style.backgroundColor = "black";
    }
}