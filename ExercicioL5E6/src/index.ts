//-------------------------------------------------------------------- Declaração de variáveis --------------------------------------------------------------------------------\\

var somaIdades: number = 0;
var contIdade: number = 0;
var mediaIdade: number = 0;
var maiorIdade: number = -1;
var pessoasAteCinco: number = 0;
var pessoasMaisDezoito: number = 0;
var btnAddIdade = document.getElementById("idBtn") as HTMLButtonElement;
var idadeDigitada = document.getElementById("idIdade") as HTMLInputElement;
const atualizarDisplay = document.getElementById("idSaida") as HTMLTextAreaElement;

//------------------------------------------------------------- Função adicionar idade e atualizar display --------------------------------------------------------------------\\

btnAddIdade.onclick = function(){
    somaIdades = somaIdades + Number(idadeDigitada.value);
    contIdade++;
    chamarFuncoes();
}

//---------------------------------------------------------------------- Função calcular média --------------------------------------------------------------------------------\\

function calcularMedia():number{
    mediaIdade = somaIdades/contIdade;

    return mediaIdade;
}

//-------------------------------------------------------------------- Função contagem das idades -----------------------------------------------------------------------------\\

function contarIdadesM5ouM18():void{

    let idade: number = Number(idadeDigitada.value);

    if (Number(idade) < 5){
        pessoasAteCinco++;   

        }else if(Number(idade) > 18){
            pessoasMaisDezoito++;

            }else if(Number(idade) > maiorIdade){
                maiorIdade = idade;
            }

}

//-------------------------------------------------------------------- Função criação da mensagem -----------------------------------------------------------------------------\\

function criarMensagem():void{

    let mensagem: string = "";

    mensagem = "Média de idades: "+ mediaIdade + "\nQuantidade pessoas maiores de 18: "+ pessoasMaisDezoito +"\nQuantidade pessoas menores de 5: "+ pessoasAteCinco; +"Maior idade: "+ maiorIdade;

    atualizarDisplay.value = mensagem;

}

//------------------------------------------------------------------ Função de unificação de funções --------------------------------------------------------------------------\\

function chamarFuncoes(){
    calcularMedia();
    contarIdadesM5ouM18();
    criarMensagem();
}

//--------------------------------------------------------------------------- Fim do código -----------------------------------------------------------------------------------\\