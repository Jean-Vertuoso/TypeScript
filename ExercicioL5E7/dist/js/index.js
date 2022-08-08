"use strict";
//-------------------------------------------------------------------- Declaração de variáveis --------------------------------------------------------------------------------\\
var botaoAposta = document.getElementById("idBtn");
const atualizarDisplay = document.getElementById("idSaida");
var numeroApostado = document.getElementById("idNumEscolhido");
var acabouJogo = false;
var numeroSorteado = Math.trunc(Number(Math.random()) * 11);
var tentativas = 0;
//---------------------------------------------------------------- Chamada de função de inicialização -------------------------------------------------------------------------\\
iniciarJogo();
console.log(numeroSorteado);
//---------------------------------------------------------------------- Função de inicialização ------------------------------------------------------------------------------\\
function iniciarJogo() {
    if (numeroSorteado == 0) {
        numeroSorteado = 1;
    }
    return numeroSorteado;
}
botaoAposta.onclick = function () {
    let isCampoPreenchido = consistirTela();
    if ((Number(numeroApostado) === numeroSorteado) && isCampoPreenchido) {
        atualizarDisplay.value = "Parabéns vc acertou!";
        acabouJogo = true;
    }
    else if ((Number(numeroApostado) > numeroSorteado) && isCampoPreenchido) {
        atualizarDisplay.value = "O número apostado é maior que sorteado";
        tentativas++;
    }
    else if ((Number(numeroApostado) < numeroSorteado) && isCampoPreenchido) {
        atualizarDisplay.value = "O número apostado é menor que sorteado";
        tentativas++;
    }
    if ((tentativas >= 3 && Number(numeroApostado) != numeroSorteado) && isCampoPreenchido) {
        atualizarDisplay.value = "Jogo encerrado, você perdeu, mais sorte da próxima vez!";
        acabouJogo = true;
    }
    else if ((tentativas == 3 && Number(numeroApostado) == numeroSorteado) && isCampoPreenchido) {
        atualizarDisplay.value = "Parabéns vc acertou!";
        acabouJogo = true;
    }
    console.log("123");
    console.log(numeroApostado.value);
    console.log(numeroSorteado);
};
//---------------------------------------------------------------- Função controle de labels e caixas -------------------------------------------------------------------------\\
function finalizarJogo() {
    let caixaNumero = document.querySelector("#idNumEscolhido");
    if (acabouJogo == true) {
        caixaNumero.disabled = true;
        botaoAposta.value = "Iniciar";
    }
}
//---------------------------------------------------------------- Função de consistência de dado inserido --------------------------------------------------------------------\\
function consistirTela() {
    if (numeroApostado.value == "" || numeroApostado.value == " ") {
        alert("Preenchimento obrigatório: Campo numero apostado!");
        numeroApostado.focus();
        return false;
    }
    return true;
}
//---------------------------------------------------------------------------- Fim do código ----------------------------------------------------------------------------------\\
