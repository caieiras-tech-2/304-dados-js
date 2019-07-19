// MENSAGEM PERSONALIZADA COM TEMMPLATE STRING

let nome = prompt("Digite seu nome");
const anoNascimento = Number(prompt("Digite o ano em que você nasceu"));
let anoAtual = 2019;
let idade = anoAtual - anoNascimento;

console.log(`Olá eu me chamo ${nome}, tenho ${idade} anos, e estou estudando JS`);




// CALCULO DA MÉDIA
let nome = prompt("Digite seu nome");
let matricula = Number(prompt("Digite seu número de matrícula"));

let nota1 = Number(prompt("Digite sua primeira nota"));
let nota2 = Number(prompt("Digite sua segunda nota"));

let media = (nota1+nota2)/2;

console.log(`O aluno ${nome}, matrícula ${matricula}, obteve a média final: ${media}`);


// TESTES COM IF E ELSE
let ano = 1000;

if(ano == 2019){
    console.log("Acertô mizeravi");
}
else if(ano<1900){
    console.log("Ta fazendo hr extra"); 
}
else if(ano === 1996){
    console.log("Lucas nasceu aqui, parabens");
}
else{
    console.log("ERRROOOOU");
}

// EXERCICIO COMPLETO DE MEDIA

let nome = prompt("Digite seu nome");
let nota1 = Number(prompt("Digite a nota  1"));
let nota2 = Number(prompt("Digite a nota  2"));

let media = (nota1+nota2)/2;

if(media<0 || media > 10){
    console.log("Nota inválida");
}
else{
    if(media >=7){
        console.log(`O aluno ${nome} foi aprovado`);
    }
    else if(media>=4 && media<7){
        console.log(`iiiiiiinfelizmente o aluno ${nome} está de recuperação`);
    }
    else{
        console.log(`Gostamos tanto do ${nome} que elx foi reprovado`);
    }
}


// OPERADORES
let idade = 25;

idade += 1;
console.log(idade) //Imprimirá 26

// NÚMERO PAR OU IMPAR
let numero = 100;

// % VERIFICA O RESTO DA DIVISA
if(numero % 2 === 0){
    console.log(`O número ${numero} é par`);
} else{
    console.log(`O número ${numero} é ímpar`);
}

