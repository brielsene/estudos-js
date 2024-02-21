document.getElementById("texto").innerHTML=(5+5);

function mudarBackground(){
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#DDD";
}

function backColor(){
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
}

function btn1(){
    var primeiro = document.getElementsByName("inputTxt")[0].value;
    document.getElementsByName("inputTxt")[0].value = primeiro + 1;
    
}

function btnMais(){
     var primeiro = document.getElementsByName("inputTxt")[0].value;
     document.getElementsByName("inputTxt")[0].value = primeiro + "+";
}

function btn2(){
    var primeiro = document.getElementsByName("inputTxt")[0].value;
    document.getElementsByName("inputTxt")[0].value = primeiro + 2;
}

function executarResultado() {
    var input = document.getElementsByName("inputTxt")[0].value;
    
    // Dividir a string em partes usando o método split
    var partes = input.split("+");

    // Verificar se a operação é uma adição
    if (partes.length === 2) {
        var primeiroNumero = parseFloat(partes[0]);
        var segundoNumero = parseFloat(partes[1]);
        var resultado = primeiroNumero + segundoNumero;
        document.getElementById("resultado").innerHTML = resultado;
    } else {
        document.getElementById("resultado").innerHTML = "Operação não suportada";
    }
}

function limpar(){
    document.getElementsByName("inputTxt")[0].value = "";
    document.getElementById("resultado").innerHTML = "";
}
