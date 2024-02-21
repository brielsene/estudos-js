
// var anoAtual = new Date().getFullYear();

// for(let i = anoAtual; i>=2005; i--){
//     document.getElementById("ano").innerHTML += "<option value='"+ i +"'>"+ i + "</option>";
// }

const carros = [
    "Gol",
    "Fusca",
    "Chevette",
    "Jetta"
]



for(let i =0; i<=carros.length-1; i++){
    document.getElementById("ano").innerHTML += "<option value='" + carros[i] + "'>" + carros[i] + "</option>";
}

function imprimir(){
    document.getElementById("teste").innerHTML = document.getElementById("ano").value;
}

function clean(){
    document.getElementById("teste").innerHTML = "";
    
}

