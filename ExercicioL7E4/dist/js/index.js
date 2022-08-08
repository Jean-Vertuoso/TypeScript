"use strict";
//-------------------------------------------------------------------- Declaração de variáveis --------------------------------------------------------------------------------\\
const temp = [];
var labelTemp = document.getElementById("idLbTemp");
var tempInserida = document.getElementById("idTemp");
var diaInserido = document.getElementById("idDia");
const atualizarDisplay = document.getElementById("idResultado");
const botaoAdicionar = document.getElementById("idBotaoGuardar");
const botaoResultado = document.getElementById("idMostrarResultado");
var cont = 30;
var contDia = 2;
var somaTemp = 0;
var mediaTemp = 0;
//-------------------------------------------------------------------- Inicialização do programa ------------------------------------------------------------------------------\\
iniciar();
function iniciar() {
    diaInserido.disabled = true;
    botaoResultado.disabled = true;
}
//-------------------------------------------------------------------- Função para alimentar array ----------------------------------------------------------------------------\\
botaoAdicionar.onclick = function () {
    let isTelaValida = consistirTela();
    if ((cont != 0) && (isTelaValida)) {
        temp.push(tempInserida.valueAsNumber);
        console.log(temp);
        modificarLabel();
        limparCaixas();
        cont--;
        contDia++;
    }
    if (cont == 0) {
        bloquearCaixas();
    }
};
//--------------------------------------------------------------------- Função para realizar soma e calcular média -----------------------------------------------------------\\
function somaDasTemp(mediaTemp) {
    somaTemp = temp.reduce(function (somaTemp, temp) {
        return somaTemp + temp;
    }, 0);
    mediaTemp = somaTemp / temp.length;
    return mediaTemp;
}
//---------------------------------------------------------------- Função para realizar análise e mostrar resultado -----------------------------------------------------------\\
botaoResultado.onclick = function () {
    let mediaT = somaDasTemp(mediaTemp);
    let dia = Number(diaInserido.value);
    let mensagem = "";
    for (let i = 0; i < temp.length; i++) {
        if ((dia - 1) == i) {
            if (temp[i] > mediaT) {
                mensagem = "A temperatura do dia " + dia + " estava acima da média";
            }
            else {
                mensagem = "A temperatura do dia " + dia + " estava abaixo da média";
            }
        }
    }
    atualizarDisplay.value = "Média das temperaturas: " + mediaT + "ºC.\n" + mensagem + ".";
};
//----------------------------------------------------------------- Função de controle caixas de digitação e labels -----------------------------------------------------------\\
function bloquearCaixas() {
    labelTemp.innerText = "Digite a temperatura do 30º dia";
    tempInserida.disabled = true;
    diaInserido.disabled = false;
    botaoAdicionar.disabled = true;
    botaoResultado.disabled = false;
}
//------------------------------------------------------------------------- Aumentar número do label do dia -------------------------------------------------------------------\\
function modificarLabel() {
    let labelTemp = document.getElementById("idLbTemp");
    labelTemp.innerText = `Digite a temperatura do ${contDia}º dia`;
}
//------------------------------------------------------------------------- Limpar caixas quando adiciona valor ---------------------------------------------------------------\\
function limparCaixas() {
    tempInserida.value = "";
}
//------------------------------------------------------------------------------- Consistência de telas -----------------------------------------------------------------------\\
function consistirTela() {
    if (tempInserida.value == "" || tempInserida.value == " ") {
        alert("Preenchimento obrigatório: Campo Temperatura!");
        tempInserida.focus();
        return false;
    }
    return true;
}
//------------------------------------------------------------------------------- Fim do código -------------------------------------------------------------------------------\\
