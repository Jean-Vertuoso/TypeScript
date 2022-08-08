//-------------------------------------------------------------------- Declaração de variáveis --------------------------------------------------------------------------------\\
const temp: number[] = [];
var labelTemp = document.getElementById("idLbTemp") as HTMLLabelElement;
var tempInserida = document.getElementById("idTemp") as HTMLInputElement;
var diaInserido = document.getElementById("idDia") as HTMLInputElement;
const atualizarDisplay = document.getElementById("idResultado") as HTMLTextAreaElement;
const botaoAdicionar = document.getElementById("idBotaoGuardar") as HTMLButtonElement;
const botaoResultado = document.getElementById("idMostrarResultado") as HTMLButtonElement;
var cont: number = 30;
var contDia: number = 2;
var somaTemp: number = 0;
var mediaTemp: number = 0;

//-------------------------------------------------------------------- Inicialização do programa ------------------------------------------------------------------------------\\

iniciar();

function iniciar():void{

    diaInserido.disabled = true;
    botaoResultado.disabled = true;

}

//-------------------------------------------------------------------- Função para alimentar array ----------------------------------------------------------------------------\\

botaoAdicionar.onclick = function():void{

    let isTelaValida: boolean = consistirTela();
    
    if ((cont != 0) && (isTelaValida)){
        temp.push(tempInserida.valueAsNumber);
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

//--------------------------------------------------------------------- Função para realizar soma e calcular média -----------------------------------------------------------\\

function somaDasTemp(mediaTemp: number): number{

    somaTemp = temp.reduce(function (somaTemp, temp){
        return somaTemp + temp;
    }, 0);

    mediaTemp = somaTemp / temp.length;

    return mediaTemp;
}

//---------------------------------------------------------------- Função para realizar análise e mostrar resultado -----------------------------------------------------------\\

botaoResultado.onclick = function():void{
    
    let mediaT = somaDasTemp(mediaTemp); 
    let dia: number = Number(diaInserido.value);
    let mensagem: string = "";

        for(let i = 0;i < temp.length; i++){
            if ((dia - 1) == i){
                if (temp[i] > mediaT){
                    mensagem = "A temperatura do dia "+ dia +" estava acima da média";
                } else {
                    mensagem = "A temperatura do dia "+ dia +" estava abaixo da média";
                }
            }
        }

    atualizarDisplay.value = "Média das temperaturas: "+ mediaT.toFixed(2) +"ºC.\n"+ mensagem +"."

}

//----------------------------------------------------------------- Função de controle caixas de digitação e labels -----------------------------------------------------------\\

function bloquearCaixas():void{

    labelTemp.innerText = "Digite a temperatura do 30º dia";
    tempInserida.disabled = true;
    diaInserido.disabled = false;
    botaoAdicionar.disabled = true;
    botaoResultado.disabled = false;

}

//------------------------------------------------------------------------- Aumentar número do label do dia -------------------------------------------------------------------\\

function modificarLabel():void{

    let labelTemp = document.getElementById("idLbTemp") as HTMLLabelElement;

    labelTemp.innerText = `Digite a temperatura do ${contDia}º dia`;

}

//------------------------------------------------------------------------- Limpar caixas quando adiciona valor ---------------------------------------------------------------\\

function limparCaixas():void{

    tempInserida.value = "";

}
//------------------------------------------------------------------------------- Consistência de telas -----------------------------------------------------------------------\\

function consistirTela():boolean{

    if (tempInserida.value == "" || tempInserida.value == " ") {

        alert("Preenchimento obrigatório: Campo Temperatura!");
        tempInserida.focus();

        return false;
    }

    return true;

}



//------------------------------------------------------------------------------- Fim do código -------------------------------------------------------------------------------\\