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
const atualizarDisplay = document.getElementById("idSaida");
//------------------------------------------------------------- Função adicionar idade e atualizar display --------------------------------------------------------------------\\
btnAddIdade.onclick = function () {
    somaIdades = somaIdades + Number(idadeDigitada.value);
    contIdade++;
    chamarFuncoes();
};
//---------------------------------------------------------------------- Função calcular média --------------------------------------------------------------------------------\\
function calcularMedia() {
    mediaIdade = somaIdades / contIdade;
    return mediaIdade;
}
//-------------------------------------------------------------------- Função contagem das idades -----------------------------------------------------------------------------\\
function contarIdadesM5ouM18() {
    let idade = Number(idadeDigitada.value);
    if (Number(idade) < 5) {
        pessoasAteCinco++;
    }
    else if (Number(idade) > 18) {
        pessoasMaisDezoito++;
    }
    else if (Number(idade) > maiorIdade) {
        maiorIdade = idade;
    }
}
//-------------------------------------------------------------------- Função criação da mensagem -----------------------------------------------------------------------------\\
function criarMensagem() {
    let mensagem = "";
    mensagem = "Média de idades: " + mediaIdade + "\nQuantidade pessoas maiores de 18: " + pessoasMaisDezoito + "\nQuantidade pessoas menores de 5: " + pessoasAteCinco;
    +"Maior idade: " + maiorIdade;
    atualizarDisplay.value = mensagem;
}
//------------------------------------------------------------------ Função de unificação de funções --------------------------------------------------------------------------\\
function chamarFuncoes() {
    calcularMedia();
    contarIdadesM5ouM18();
    criarMensagem();
}
//--------------------------------------------------------------------------- Fim do código -----------------------------------------------------------------------------------\\
