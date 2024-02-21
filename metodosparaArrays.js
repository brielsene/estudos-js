
const pessoa = ["gabriel", "dev", 21];
pessoa.splice(0, 0, "João");
//o primeiro parametro é para dizer qual posição vc quer colocar o novo conteúdo, o segundo é se ele vai deletar dali em diante,
//exemplo se vc colocar um, ele vai apagar o gabriel, e deixar o joão no lugar, se digitar 2 ele vai apagar gabriel e dev, e o resultado será apenas joão 21
//e o terceiro é o conteúdo



const lista1 = ["arroz", "feijão", "carne"];
const lista2 = ["batata", "tomate", "cebola"]
//concatenar 2 listas em uma única
const listaGeral = lista1.concat(lista2);


//----------------------------------------------------

//slice serve para fatear a matriz de um determinado ponto
const jogadores = ["birubiru", "luciano", "messi", "pelé"];
const craques = jogadores.slice(2);
//ou seja ele vai mostrar apenas a partir da segunda posição, apareça só: messi, pelé;

//vamos supor que depois de pelé apareça um jogador ruim, o que fazemos?
const jogadores2 = ["birubiru", "luciano", "messi", "pelé", "neymar", "cr7", "vitor bueno"];
const craques2 = jogadores2.slice(2, 6);
//assim ficaria, e ai mostraria só da posição 2 até a 5, o 6 não mostraria

//---------------------------------------------------------

//deixar em ordem alfabética
jogadores2.sort()
//se quisermos deixar em ordem contrária, ficaria:
jogadores2.sort()
jogadores2.reverse()
//

//agora ordenar para números
const numeros =[
    10,
    -1,
    4,
    25,
    2

];
//temos que colocar essa function, não me pergunte o porque, é complicado explicar
alert(numeros.sort(function(a, b){return a - b}));

//agora vamos pegar o maior número da matriz

function maiorNumero(array){
    return Math.max.apply(null, array)
}



//para pegar o menor número, fazemos:
function menorNumero(array){
    return Math.min.apply(null, array);
}

//só quero mostrar número maiores do que 0
const maiorQue0 = numeros.filter(filtragem);

alert(maiorQue0);

function filtragem(value, index, array){
    return value > 0;
}





