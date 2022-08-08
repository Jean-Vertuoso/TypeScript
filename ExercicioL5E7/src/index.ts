//-------------------------------------------------------------------- Declaração de variáveis --------------------------------------------------------------------------------\\

var botaoAposta = document.getElementById("idBtn") as HTMLButtonElement;
const atualizarDisplay = document.getElementById("idSaida") as HTMLInputElement;
var numeroApostado = document.getElementById("idNumEscolhido") as HTMLInputElement;
var acabouJogo: boolean = false; 
var numeroSorteado: number = Math.trunc(Number(Math.random()) * 11);
var tentativas: number = 0;

//---------------------------------------------------------------- Chamada de função de inicialização -------------------------------------------------------------------------\\

iniciarJogo();
console.log(numeroSorteado);

//---------------------------------------------------------------------- Função de inicialização ------------------------------------------------------------------------------\\

function iniciarJogo():number{

    if (numeroSorteado == 0) {
        numeroSorteado = 1;
    }
    return numeroSorteado;

}

botaoAposta.onclick = function():void{

    let isCampoPreenchido = consistirTela();

   if ((Number(numeroApostado) === numeroSorteado) && isCampoPreenchido) {    
        atualizarDisplay.value = "Parabéns vc acertou!";
        acabouJogo = true;
        
        } else if ((Number(numeroApostado) > numeroSorteado) && isCampoPreenchido) {
            atualizarDisplay.value = "O número apostado é maior que sorteado";
            tentativas++;

            } else if ((Number(numeroApostado) < numeroSorteado) && isCampoPreenchido){
                atualizarDisplay.value = "O número apostado é menor que sorteado";
                tentativas++;
            } 
            
    if ((tentativas >= 3 && Number(numeroApostado) != numeroSorteado) && isCampoPreenchido){
        atualizarDisplay.value = "Jogo encerrado, você perdeu, mais sorte da próxima vez!";
        acabouJogo = true;
        
            }else if ((tentativas == 3 && Number(numeroApostado) == numeroSorteado) && isCampoPreenchido){
                atualizarDisplay.value = "Parabéns vc acertou!";
                acabouJogo = true;
            }
console.log("123");
console.log(numeroApostado.value);
console.log(numeroSorteado);

}

//---------------------------------------------------------------- Função controle de labels e caixas -------------------------------------------------------------------------\\

function finalizarJogo():void{

    let caixaNumero = document.querySelector("#idNumEscolhido") as HTMLInputElement;

    if(acabouJogo == true){

        caixaNumero.disabled = true;
        botaoAposta.value = "Iniciar";

    }

}

//---------------------------------------------------------------- Função de consistência de dado inserido --------------------------------------------------------------------\\

function consistirTela():boolean{

    if (numeroApostado.value == "" || numeroApostado.value == " ") {

        alert("Preenchimento obrigatório: Campo numero apostado!");
        numeroApostado.focus();

        return false;
    }

    return true;

}

//---------------------------------------------------------------------------- Fim do código ----------------------------------------------------------------------------------\\