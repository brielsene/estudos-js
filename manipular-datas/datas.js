/** MANIPULAR DATAS EM JAVASCRIPT */

let data = new Date();
//COMANDO BASE PARA PEGAR A DATA
console.log(data);

//PEGAR O ANO ATUAL COM 4 DÍGITOS
let ano = data.getFullYear();
console.log(ano);

//PEGAR O MÊS ATUAL - DE 0 ATÉ 11 SENDO 0 JANEIRO E 11 DEZEMBRO
let mes = data.getMonth();
console.log(mes+1);

//PEGAR DIA DO MÊS
let diaMes = data.getDate();
console.log(diaMes);

//PEGAR DIA DA SEMANA -
let diaSemana = data.getDay();

const diasDaSemana = [
    "Domingo", 
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
]

console.log(diasDaSemana[diaSemana]);

//PEGAR A HORA - DE 0 ATÉ 23
let horario = data.getHours();
console.log(horario);

//PEGAR MINUTOS -  DE 0 ATÉ 59
let minutos = data.getMinutes();
console.log(minutos);

//PEGAR SEGUNDOS - DE 0 ATÉ 59
let segundos = data.getSeconds();
console.log(segundos);

//PEGAR SEGUNDOS - DE 0 ATÉ 999
let miliSegundos = data.getMilliseconds();
console.log(miliSegundos);

//PEGAR A DATA NO PADRÃO BRASILEIRO - DIA / MES / ANO
let dataBR = data.toLocaleString("pt-br");
console.log(dataBR);

//PEGAR OS VALORES SEPARADOS
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x){
    //a baixo é basicamente como se fosse
    //se x < 10 retorna concat de 0+x se não apenas x
    return x < 10 ? "0"+ x : ""+x;
}

let dataPadraoBR = addZero(diaMes) + "/"  + addZero(mes) + "/"  + ano;
console.log(dataPadraoBR);

//COMPARAR DATAS - MAIOUR OU MENOS. EX: VENCIMENTOS
var hoje = new Date();
//ANO, MÊS E DIA
var vencimento = new Date(2022, 0, 15);
   
if(hoje > vencimento){
    console.log("Sua conta está vencida");
}else{
    console.log("Está em dia!!")
}

//DIFERENÇA ENTRE DUAS DATAS EM DIAS

var dataInicial = new Date();
var dataFinal = new Date(2024, 11, 31);

//MILISEGUNDOS
var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
console.log(diferencaTempo);

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));
console.log(diferencaDias);



