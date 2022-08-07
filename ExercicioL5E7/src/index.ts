//-------------------------------------------------------------------- Declaração de variáveis --------------------------------------------------------------------------------\\

var numeroApostado = document.getElementById("idNumEscolhido") as HTMLInputElement;
const numeroSorteado =  parseInt((Number(Math.random() * 11)));

function iniciar():void{

}

function acertarNumeroSorteado():void{

    var tentativas: number = 2;
    let tentativa:number = 2;

    if (numeroApostado == numeroSorteado) {
        saida.value = "Parabéns vc acertou!";
        document.querySelector("#idNumero").disabled = true;
        
        } else if (numeroApostado > numeroSorteado) {
            saida.value = "O número apostado é maior que sorteado"
            tentativa--;

            } else {
                saida.value = "O número apostado é menor que sorteado"
                tentativa--;}     
    }
    if ((tentativa == 0) && (numeroApostado != numeroSorteado)){
        saida.value = "Jogo encerrado, você perdeu, mais sorte da próxima vez!"
        document.querySelector("#idNumero").disabled = true;
        
        }else{
            saida.value = "Parabéns vc acertou!";
            document.querySelector("#idNumero").disabled = true;
        }


}


/*
var somaIdades: number = 0;
var contIdade: number = 0;
var mediaIdade: number = 0;
var maiorIdade: number = -1;
var pessoasAteCinco: number = 0;
var pessoasMaisDezoito: number = 0;
var btnAddIdade = document.getElementById("idBtn") as HTMLButtonElement;
var idadeDigitada = document.getElementById("idIdade") as HTMLInputElement;
var saida = document.getElementById("idSaida") as HTMLTextAreaElement;

btnAddIdade.onclick = function(){
    somaIdades = somaIdades + Number(idadeDigitada.value);
    contIdade++;
    chamarFuncoes();
    console.log(saida.value)
}

function calcularMedia(mediaIdade: number, somaIdades: number, contIdade: number):void{
    mediaIdade = somaIdades/contIdade;
    console.log(mediaIdade);
}

function contarIdadesM5ouM18(idadeDigitada: number, pessoasAteCinco:number, pessoasMaisDezoito:number, maiorIdade: number):void{

    if (idadeDigitada < 5){
        pessoasAteCinco++;   

        }else if(idadeDigitada > 18){
            pessoasMaisDezoito++;

            }else if(idadeDigitada > maiorIdade){
                maiorIdade = idadeDigitada;
            }

}

function atualizarDisplay(saida: string, mediaIdade: number, pessoasMaisDezoito: number, pessoasAteCinco: number, maiorIdade: number):void{

    saida.value = "Média de idades: "+ mediaIdade + "\nQuantidade pessoas maiores de 18: "+ pessoasMaisDezoito +"\nQuantidade pessoas menores de 5: "+ pessoasAteCinco; +"Maior idade: "+ maiorIdade;

}

function chamarFuncoes(){
    calcularMedia(mediaIdade, somaIdades, contIdade);
    contarIdadesM5ouM18(Number(idadeDigitada), pessoasAteCinco, pessoasMaisDezoito, maiorIdade)
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