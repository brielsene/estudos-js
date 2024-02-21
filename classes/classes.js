
class Carro{
    constructor(valor1,valor2,valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina(){
        return this.modelo + " Buzinou: "+"Biiiiiii";
    }
}

const uno = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("VK", "Gol g7", 2018);
console.log(uno);
console.log(uno.buzina());
//setar
gol.ano = 2019;