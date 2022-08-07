"use strict";
//-------------------------------------------------------------------- Declaração de variáveis --------------------------------------------------------------------------------\\
const rdCirculo = document.getElementById("idCirc");
const rdRetangulo = document.getElementById("idRetan");
const rdTriRetan = document.getElementById("idTrianRet");
const rdTriEquil = document.getElementById("idTrianEq");
var baseRaioOuLado = document.getElementById("idBaseRaioLado");
var ladoOuAltura = document.getElementById("idLadoOuAltura");
var lbBaseRaioOuLado = document.getElementById("idTrocaLabBase");
var lbLadoOuAltura = document.getElementById("idTrocaLabAlt");
const botaoCalcular = document.getElementById("idBotao");
var atualizarDisplay = document.getElementById("idResultado");
var resultadoDaConta = 0;
//-------------------------------------------------------------------- Função realizar cálculo e mostrar na tela --------------------------------------------------------------\\
botaoCalcular.onclick = function () {
    let baseRaioInserido = Number(baseRaioOuLado.value);
    let ladoAlturaInserido = Number(ladoOuAltura.value);
    if (rdCirculo.checked) {
        resultadoDaConta = baseRaioInserido * baseRaioInserido * Math.PI;
        atualizarDisplay.value = resultadoDaConta.toString();
    }
    else if (rdRetangulo.checked) {
        resultadoDaConta = baseRaioInserido * ladoAlturaInserido;
        atualizarDisplay.value = resultadoDaConta.toString();
    }
    else if (rdTriRetan.checked) {
        resultadoDaConta = (baseRaioInserido * ladoAlturaInserido) / 2;
        atualizarDisplay.value = resultadoDaConta.toString();
    }
    else {
        resultadoDaConta = ((baseRaioInserido * baseRaioInserido) * (3 ** (1 / 2))) / 4;
        atualizarDisplay.value = resultadoDaConta.toString();
    }
};
//----------------------------------------------------------------- Função de controle caixas de digitação e labels -----------------------------------------------------------\\
rdCirculo.onclick = function () {
    lbBaseRaioOuLado.innerText = "Digite o raio";
    baseRaioOuLado.value = "";
    atualizarDisplay.value = "";
    ladoOuAltura.style.visibility = "hidden";
};
rdRetangulo.onclick = function () {
    lbBaseRaioOuLado.innerText = "Digite a base";
    baseRaioOuLado.value = "";
    ladoOuAltura.value = "";
    atualizarDisplay.value = "";
    ladoOuAltura.style.visibility = "visible";
};
rdTriRetan.onclick = function () {
    lbBaseRaioOuLado.innerText = "Digite a base";
    baseRaioOuLado.value = "";
    ladoOuAltura.value = "";
    atualizarDisplay.value = "";
    ladoOuAltura.style.visibility = "visible";
};
rdTriEquil.onclick = function () {
    lbBaseRaioOuLado.innerText = "Digite o lado";
    baseRaioOuLado.value = "";
    atualizarDisplay.value = "";
    ladoOuAltura.style.visibility = "hidden";
};
//------------------------------------------------------------------------------- Fim do código -------------------------------------------------------------------------------\\
