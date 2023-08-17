function multiplicarTresNum(x,y,z){
    return x*y*z;
}

console.log(multiplicarTresNum(2,3,4));

const mult = multiplicarTresNum(5,4,8);

console.log("O valor de mult é " + mult);

function podeDirigir(idade, cnh) {
    if(idade>=18 && cnh == true){
        console.log("Pode dirigir");
    } else{
        console.log("Não pode dirigir");
    }
}

console.log(podeDirigir(18,true));
console.log(podeDirigir(25,true));
console.log(podeDirigir(44,0));
console.log(podeDirigir(19,1));
console.log(podeDirigir(17,false));

/* exemplo de escopo de função
    let y = 10;

function imprimir () {
    let y = 150;

    console.log(y);
}

imprimir();

console.log(y);*/

/* exemplo de arrow functions

let consoleTeste = () => {
    console.log("Olá Mundo")
}

consoleTeste ()

let soma = (a,b) => {
    return a + b;
}

console.log(soma (10,20));*/

/* outro exemplo de arrow functions:
const multiplocarPorDois = (x) => {
    return x * 2;
}

console.log(multiplicarPorDois(2));

const multiplicarPorDois2 = x => x * 2;

console.log(multiplicarPorDois2(4));*/