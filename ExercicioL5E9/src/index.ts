var out = document.getElementById("idSaida") as HTMLOutputElement; 
var bt = document.getElementById("idBtn") as HTMLButtonElement;

bt.onclick = function(){
    let temp    = document.getElementById("idTemp") as HTMLInputElement;
    let escalaC = document.getElementById("idCelsius") as HTMLInputElement; 
    let escalaF = document.getElementById("idFahrenheit") as HTMLInputElement; 
    let escalaK = document.getElementById("idKelvin") as HTMLInputElement; 

    if (escalaC.checked) {
       let tempF: number =  cToF(Number(temp.value));
       let tempK: number =  cToK(Number(temp.value));
       out.value = `Temperatura em Celsius: ${temp.value}ºC\nTemperatura em Fahrenheit: ${tempF.toFixed(2)}ºF\nTemperatura em Kelvin: ${tempK.toFixed(2)}ºK` 
    } else if(escalaF.checked) {
       let tempC: number = fToC(Number(temp.value));
       let tempK: number = fToK(Number(temp.value));
       out.value = `Temperatura em Celsius: ${tempC.toFixed(2)}ºC\nTemperatura em Fahrenheit: ${temp.value}ºF\nTemperatura em Kelvin: ${tempK.toFixed(2)}ºK` 
    } else if(escalaK.checked) {
       let tempC: number = kToC(Number(temp.value));
       let tempF: number = kToF(Number(temp.value));
       out.value = `Temperatura em Celsius: ${tempC.toFixed(2)}ºC\nTemperatura em Fahrenheit: ${tempF.toFixed(2)}ºF\nTemperatura em Kelvin: ${temp.value}ºK` 
    }
}

function cToF(temp: number): number{
    let tempF: number = (9 * temp + 160)/5;
    return tempF;
}

function cToK(temp: number): number{
    let tempK: number = (temp + 273);
    return tempK;
}

function fToC(temp: number): number{
    let tempC: number = (temp - 32)/1.8;
    return tempC;
}

function fToK(temp: number): number{
    let tempK: number = ((temp - 32)/1.8) + 273;
    return tempK;
}

function kToC(temp: number): number{
    let tempK: number = temp - 273;
    return tempK;
}

function kToF(temp: number): number{
    let tempK: number = ((temp - 273) * 1.8) + 32;
    return tempK;
}