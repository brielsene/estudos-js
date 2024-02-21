

function validar(){
    let usuario = document.getElementsByName("usuario")[0].value;
    let p = document.getElementById("resultado");
    if(usuario == "" || usuario == null){
        p.innerHTML = "O Campo não pode ser vázio";
        p.style.color = "red";
    }else{
        p.innerHTML = "Tudo certo!";
        p.style.color = "green";
    }
}