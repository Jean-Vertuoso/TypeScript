"use strict";
//-------------------------------------------------------------------- Declaração de variáveis --------------------------------------------------------------------------------\\
var somaIdades = 0;
var contIdade = 0;
var mediaIdade = 0;
var maiorIdade = -1;
var pessoasAteCinco = 0;
var pessoasMaisDezoito = 0;
var btnAddIdade = document.getElementById("idBtn");
var idadeDigitada = document.getElementById("idIdade");
var saida = document.getElementById("idSaida");
btnAddIdade.onclick = function () {
    somaIdades = somaIdades + Number(idadeDigitada.value);
    contIdade++;
    chamarFuncoes();
    console.log(saida.value);
};
function calcularMedia(mediaIdade, somaIdades, contIdade) {
    mediaIdade = somaIdades / contIdade;
    console.log(mediaIdade);
}
function contarIdadesM5ouM18(idadeDigitada, pessoasAteCinco, pessoasMaisDezoito, maiorIdade) {
    if (idadeDigitada < 5) {
        pessoasAteCinco++;
    }
    else if (idadeDigitada > 18) {
        pessoasMaisDezoito++;
    }
    else if (idadeDigitada > maiorIdade) {
        maiorIdade = idadeDigitada;
    }
}
function atualizarDisplay(saida, mediaIdade, pessoasMaisDezoito, pessoasAteCinco, maiorIdade) {
    saida = "Média de idades: " + mediaIdade + "\nQuantidade pessoas maiores de 18: " + pessoasMaisDezoito + "\nQuantidade pessoas menores de 5: " + pessoasAteCinco;
    +"Maior idade: " + maiorIdade;
}
function chamarFuncoes() {
    calcularMedia(mediaIdade, somaIdades, contIdade);
    contarIdadesM5ouM18(Number(idadeDigitada), pessoasAteCinco, pessoasMaisDezoito, maiorIdade);
    atualizarDisplay(saida, mediaIdade, pessoasMaisDezoito, pessoasAteCinco, maiorIdade);
}
/*
function contarIdades(){

let idadeDigitada =  Number(document.querySelector("#idIdade").value);
let saida = document.querySelector("#idSaida");

//somaIdades = somaIdades + idadeDigitada;
//contIdade++;
//mediaIdade = (somaIdades/contIdade).toFixed(2)

    if (idadeDigitada < 5){
        pessoasAteCinco++;
    }
    if (idadeDigitada > 18){
        pessoasMaisDezoito++;
    }
    if (idadeDigitada > maiorIdade){
        maiorIdade = idadeDigitada;
    }
saida.value = "Média de idades: "+ mediaIdade + "\nQuantidade pessoas maiores de 18: "+ pessoasMaisDezoito +"\nQuantidade pessoas menores de 5: "+ pessoasAteCinco; +"Maior idade: "+ maiorIdade;
}*/ 
