//-------------------------------------------------------------------- Declaração de variáveis --------------------------------------------------------------------------------\\
const rdCirculo = document.getElementById("idCirc") as HTMLInputElement;
const rdRetangulo = document.getElementById("idRetan") as HTMLInputElement;
const rdTriRetan = document.getElementById("idTrianRet") as HTMLInputElement;
const rdTriEquil = document.getElementById("idTrianEq") as HTMLInputElement;
var baseRaioOuLado = document.getElementById("idBaseRaioLado") as HTMLInputElement;
var ladoOuAltura = document.getElementById("idLadoOuAltura") as HTMLInputElement;
var lbBaseRaioOuLado = document.getElementById("idTrocaLabBase") as HTMLLabelElement;
var lbLadoOuAltura = document.getElementById("idTrocaLabAlt") as HTMLLabelElement;
const botaoCalcular = document.getElementById("idBotao") as HTMLButtonElement;
var atualizarDisplay = document.getElementById("idResultado") as HTMLInputElement;
var resultadoDaConta:number = 0;

//-------------------------------------------------------------------- Função realizar cálculo e mostrar na tela --------------------------------------------------------------\\

botaoCalcular.onclick = function(): void{
    
    let baseRaioInserido: number = Number(baseRaioOuLado.value);
    let ladoAlturaInserido: number = Number(ladoOuAltura.value);

    if (rdCirculo.checked){
        resultadoDaConta = baseRaioInserido * baseRaioInserido * Math.PI;
        atualizarDisplay.value = resultadoDaConta.toString();

        }else if (rdRetangulo.checked){
            resultadoDaConta = baseRaioInserido * ladoAlturaInserido;
            atualizarDisplay.value = resultadoDaConta.toString();
                
            } else if (rdTriRetan.checked){
                resultadoDaConta = (baseRaioInserido * ladoAlturaInserido)/2;
                atualizarDisplay.value = resultadoDaConta.toString();

                } else {
                    resultadoDaConta = ((baseRaioInserido * baseRaioInserido) * (3 **(1/2)))/4;
                    atualizarDisplay.value = resultadoDaConta.toString();
                    }
}

//----------------------------------------------------------------- Função de controle caixas de digitação e labels -----------------------------------------------------------\\

rdCirculo.onclick = function(): void{

    lbBaseRaioOuLado.innerText = "Digite o raio";
    baseRaioOuLado.value = "";
    atualizarDisplay.value = "";
    ladoOuAltura.style.visibility = "hidden";

}

rdRetangulo.onclick = function(): void{

    lbBaseRaioOuLado.innerText = "Digite a base";
    baseRaioOuLado.value = "";
    ladoOuAltura.value = "";
    atualizarDisplay.value = "";
    ladoOuAltura.style.visibility = "visible";
    
}

rdTriRetan.onclick = function(): void{
    
    lbBaseRaioOuLado.innerText = "Digite a base";
    baseRaioOuLado.value = "";
    ladoOuAltura.value = "";
    atualizarDisplay.value = "";
    ladoOuAltura.style.visibility = "visible";    

}

rdTriEquil.onclick = function(): void{
    
    lbBaseRaioOuLado.innerText = "Digite o lado";    
    baseRaioOuLado.value = "";
    atualizarDisplay.value = "";
    ladoOuAltura.style.visibility = "hidden";

}

//------------------------------------------------------------------------------- Fim do código -------------------------------------------------------------------------------\\