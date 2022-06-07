// Let
let Gays = ["Moises es gay","Kevin es gay","Sebastian es gay","Sergio es gay"]

// Input
let texto = document.getElementById('input1');

// Eventos

document.addEventListener('keydown', (event) => {
    if (event.keyCode == 96) {
        btncero();
    }else if (event.keyCode == 48) {
        btncero();
    }else if (event.keyCode == 97) {
        btnuno();
    }else if (event.keyCode == 49) {
        btnuno();
    }else if (event.keyCode == 98) {
        btndos();
    }else if (event.keyCode == 50) {
        btndos();
    }else if (event.keyCode == 99) {
        btntres();
    }else if (event.keyCode == 51) {
        btntres();
    }else if (event.keyCode == 100) {
        btncuatro();
    }else if (event.keyCode == 52) {
        btncuatro();
    }else if (event.keyCode == 101) {
        btncinco();
    }else if (event.keyCode == 53) {
        btncinco();
    }else if (event.keyCode == 102) {
        btnseis();
    }else if (event.keyCode == 54) {
        btnseis();
    }else if (event.keyCode == 103) {
        btnsiete();
    }else if (event.keyCode == 55) {
        btnsiete();
    }else if (event.keyCode == 104) {
        btnocho();
    }else if (event.keyCode == 56) {
        btnocho();
    }else if (event.keyCode == 105) {
        btnnueve();
    }else if (event.keyCode == 57) {
        btnnueve();
    }else if (event.keyCode == 107) {
        btnsuma();
    }else if (event.keyCode == 109) {
        btnresta();
    }else if (event.keyCode == 106) {
        btnmulti();
    }else if (event.keyCode == 111) {
        btndivi();
    }else if (event.keyCode == 13) {
        btnigual();
    }else if (event.keyCode == 8) {
        btnlimpiar();
    }
    console.log(event.keyCode);
});

// funciones

let btncero = () => {
    texto.value += 0;
    return texto.value;
}
let btnuno = () => {
    texto.value += 1;
    return texto.value;
}
let btndos = () => {
    texto.value += 2;
    return texto.value;
}
let btntres = () => {
    texto.value += 3;
    return texto.value;
}
let btncuatro = () => {
    texto.value += 4;
    return texto.value;
}
let btncinco = () => {
    texto.value += 5;
    return texto.value;
}
let btnseis = () => {
    texto.value += 6;
    return texto.value;
}
let btnsiete = () => {
    texto.value += 7;
    return texto.value;
}
let btnocho = () => {
    texto.value += 8;
    return texto.value;
}
let btnnueve = () => {
    texto.value += 9;
    return texto.value;
}
let btnsuma = () => {
    texto.value += "+";
    return texto.value;
}
let btnresta = () => {
    texto.value += "-";
    return texto.value;
}
let btnmulti = () => {
    texto.value += "*";
    return texto.value;
}
let btndivi = () => {
    texto.value += "/";
    return texto.value;
}
let btnlimpiar = () => {
    texto.value = "";
    return texto.value;
}
let btnigual = (n1=0, n2=3) => {
    if(texto.value==3){
        texto.value = Gays[Math.round(Math.random() * (n2-n1))+n1];
    }else{
    texto.value = eval(texto.value);
    }
}
