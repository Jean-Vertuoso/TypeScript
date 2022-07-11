//-------------------------------------------------------------------- Declaração de variáveis --------------------------------------------------------------------------------\\
const rdCirculo = document.getElementById("idCirc") as HTMLInputElement;
const rdRetangulo = document.getElementById("idRetan") as HTMLInputElement;
const rdTriRetan = document.getElementById("idTrianRet") as HTMLInputElement;
const rdTriEquil = document.getElementById("idTrianEq") as HTMLInputElement;
var lbBaseRaioOuLado = document.getElementById("idTrocaLabBase") as HTMLLabelElement;
const baseRaioOuLado = document.getElementById("idCirAndTriaEq") as HTMLInputElement;
var lbLadoOuAltura = document.getElementById("idTrocaLabAlt") as HTMLLabelElement;
const ladoOuAltura = document.getElementById("idRetanOuTrianRet") as HTMLInputElement;
const botaoCalcular = document.getElementById("idBotao") as HTMLButtonElement;

//-------------------------------------------------------------------- Inicialização do programa ------------------------------------------------------------------------------\\

//iniciar();

//f//unction iniciar(){

//}

//-------------------------------------------------------------------- Função realizar cálculo e mostrar na tela --------------------------------------------------------------\\

botaoCalcular.onclick = function(){

    console.log(baseRaioOuLado.value);

}

//----------------------------------------------------------------- Função de controle caixas de digitação e labels -----------------------------------------------------------\\

rdCirculo.onclick = function(){

    lbBaseRaioOuLado.innerText = "Digite o raio";
    ladoOuAltura.style.visibility = "hidden";

}

rdRetangulo.onclick = function(){

    lbBaseRaioOuLado.innerText = "Digite a base";
    ladoOuAltura.style.visibility = "visible";
    
}

rdTriRetan.onclick = function(){
    
    lbBaseRaioOuLado.innerText = "Digite a base";
    ladoOuAltura.style.visibility = "visible";    

}

rdTriEquil.onclick = function(){
    
    lbBaseRaioOuLado.innerText = "Digite o lado";
    ladoOuAltura.style.visibility = "hidden";    

}

//------------------------------------------------------------------------------- Fim do código -------------------------------------------------------------------------------\\