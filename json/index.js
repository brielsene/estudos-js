
// const carro = {
//     marca: "Fiat",
//     modelo: "Uno",
//     motor: ["1.6", "1.4", "1.0"]
// }
//CONVERTER PARA JSON
// let texto = JSON.stringify(carro);

// document.getElementById("area").innerHTML = texto;

// //CONVERTER PARA OBJ
// let obj =  JSON.parse(texto);SS
// console.log(obj.motor[0]);

//-------------------------------




function buscar(){
    const ajax = new XMLHttpRequest();
    let cep = document.getElementById("cep").value;
    let stringRequest = "https://viacep.com.br/ws/" + cep + "/json/";
    ajax.open("GET", stringRequest);
    ajax.send();

    ajax.onload = function(){
         let p =document.createElement("p");
         document.body.append(p);
         let obj = JSON.parse(this.responseText);
         p.innerHTML = obj.logradouro;
    
}
}