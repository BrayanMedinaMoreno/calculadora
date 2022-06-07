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

//* Input
let texto = document.getElementById('input1');

//* vr comunes
let numero1 = "";
let numero2 = "";
let operadorSimbolo = "";

//* fun comprobar 
function comprobar(num){
    texto.value += num;
}
function operaciones(operador){
    numero1 = texto.value;
    texto.value = "";
    operadorSimbolo = operador;
}

//* Funciones
function btncero(){
    comprobar("0");
}
function btnuno(){
    comprobar("1");
}
function btndos(){
    comprobar("2");
}
function btntres(){
    comprobar("3");
}
function btncuatro(){
    comprobar("4");
}
function btncinco(){
    comprobar("5");
}
function btnseis(){
    comprobar("6");
}
function btnsiete(){
    comprobar("7");
}
function btnocho(){
    comprobar("8");
}
function btnnueve(){
    comprobar("9");
}
function btnsuma(){
    operaciones ("+");
}
function btnresta(){
    operaciones ("-");
}
function btnmulti(){
    operaciones ("*");
}
function btndivi(){
    operaciones ("/");
}
function btnigual(){
    numero2 = texto.value;
    switch(operadorSimbolo) {
        case "+":
            texto.value = parseInt(numero1) + parseInt(numero2);
            break;
        case "-":
            texto.value = parseInt(numero1) - parseInt(numero2);
            break;
        case "*":
            texto.value = parent(numero1) * parseInt(numero2);
            break;
        case "/":
            texto.value = parseInt(numero1) / parseInt(numero2);
            break;
    }
}
function btnlimpiar(){
    texto.value = "";
    numero1 = "";
    numero2 = "";
    operadorSimbolo = "";
}