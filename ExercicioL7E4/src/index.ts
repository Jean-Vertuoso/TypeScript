//-------------------------------------------------------------------- Declaração de variáveis --------------------------------------------------------------------------------\\
const temp: number[] = [];
var labelTemp = document.getElementById("idLbTemp") as HTMLLabelElement;
var caixaDigitacao = document.getElementById("idTemp") as HTMLInputElement;
var caixaDia = document.getElementById("idDia") as HTMLInputElement;
var botaoAdicionar = document.getElementById("idBotaoGuardar") as HTMLButtonElement;
var botaoResultado = document.getElementById("idMostrarResultado") as HTMLButtonElement;
var cont: number = 30;
var contDia: number = 2;

//-------------------------------------------------------------------- Inicialização do programa ------------------------------------------------------------------------------\\

iniciar();

function iniciar(){

    caixaDia.disabled = true;
    botaoResultado.disabled = true;

}

//-------------------------------------------------------------------- Função para alimentar array ----------------------------------------------------------------------------\\

botaoAdicionar.onclick = function(){

    let isTelaValida = consistirTela();
    
    if ((cont != 0) && (isTelaValida)){
        temp.push(caixaDigitacao.valueAsNumber);
        console.log(temp);
        modificarLabel();
        limparCaixas();
        cont--;
        contDia++;
    }
    
    if (cont == 0){        
        bloquearCaixas()
    }
    
}

//---------------------------------------------------------------- Função para realizar análise e mostrar resultado -----------------------------------------------------------\\

/*botaoResultado.onclick = function(){

    somaTemp = temp.reduce(function (somaTemp, temp){// Função para somar todas os itens da array;
        return somaTemp + temp;
    }, 0);
    mediaTemp = somaTemp / temp.length;// Operação para calcular a média entre a soma das temperaturas dividindo pelo tamanho da array;

        for(let i = 0;i < temp.length; i++){// Laço FOR para percorrer a array;
            if ((diaEscolhido - 1) == i){// Comparação entre o dia escolhido - 1 (devido a array começar em 0) e o número do índice da array...)
                if (temp[i] > mediaTemp){// Se a temperatura do dia escolhido for maior que a média de temperatura;
                    mensagem = "A temperatura do dia "+ diaEscolhido +" estava acima da média";// Mostre essa mensagem senão...;
                } else {
                    mensagem = "A temperatura do dia "+ diaEscolhido +" estava abaixo da média";// Mostre essa.
                }
            }
        }               
    saida.value = "Média das temperaturas: "+ mediaTemp.toFixed(1) +"ºC.\n"+ mensagem +"."// Mostra a saída dentro do textarea de resultado;


}*/                                             //******* FUNÇÃO EM CONSTRUÇÃO *******//

//----------------------------------------------------------------- Função de controle caixas de digitação e labels -----------------------------------------------------------\\

function bloquearCaixas(){

    labelTemp.innerText = "Digite a temperatura do 30º dia";
    caixaDigitacao.disabled = true;
    caixaDia.disabled = false;
    botaoAdicionar.disabled = true;
    botaoResultado.disabled = false;

}

//------------------------------------------------------------------------- Aumentar número do label do dia -------------------------------------------------------------------\\

function modificarLabel(){

    let labelTemp = document.getElementById("idLbTemp") as HTMLLabelElement;

    labelTemp.innerText = `Digite a temperatura do ${contDia}º dia`;

}

//------------------------------------------------------------------------- Limpar caixas quando adiciona valor ---------------------------------------------------------------\\

function limparCaixas(){

    caixaDigitacao.value = "";

}
//------------------------------------------------------------------------------- Consistência de telas -----------------------------------------------------------------------\\

function consistirTela(){

    if (caixaDigitacao.value == "" || caixaDigitacao.value == " ") {

        alert("Preenchimento obrigatório: Campo Temperatura!");
        caixaDigitacao.focus();                  
        return false;

    }

    return true;

}



//------------------------------------------------------------------------------- Fim do código -------------------------------------------------------------------------------\\