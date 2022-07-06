"use strict";
var out = document.getElementById("idSaida");
var bt = document.getElementById("idBtn");
bt.onclick = function () {
    let temp = document.getElementById("idTemp");
    let escalaC = document.getElementById("idCelsius");
    let escalaF = document.getElementById("idFahrenheit");
    let escalaK = document.getElementById("idKelvin");
    if (escalaC.checked) {
        let tempF = cToF(Number(temp.value));
        let tempK = cToK(Number(temp.value));
        out.value = `Temperatura em Celsius: ${temp.value}ºC\nTemperatura em Fahrenheit: ${tempF.toFixed(2)}ºF\nTemperatura em Kelvin: ${tempK.toFixed(2)}ºK`;
    }
    else if (escalaF.checked) {
        let tempC = fToC(Number(temp.value));
        let tempK = fToK(Number(temp.value));
        out.value = `Temperatura em Celsius: ${tempC.toFixed(2)}ºC\nTemperatura em Fahrenheit: ${temp.value}ºF\nTemperatura em Kelvin: ${tempK.toFixed(2)}ºK`;
    }
    else if (escalaK.checked) {
        let tempC = kToC(Number(temp.value));
        let tempF = kToF(Number(temp.value));
        out.value = `Temperatura em Celsius: ${tempC.toFixed(2)}ºC\nTemperatura em Fahrenheit: ${tempF.toFixed(2)}ºF\nTemperatura em Kelvin: ${temp.value}ºK`;
    }
};
function cToF(temp) {
    let tempF = (9 * temp + 160) / 5;
    return tempF;
}
function cToK(temp) {
    let tempK = (temp + 273);
    return tempK;
}
function fToC(temp) {
    let tempC = (temp - 32) / 1.8;
    return tempC;
}
function fToK(temp) {
    let tempK = ((temp - 32) / 1.8) + 273;
    return tempK;
}
function kToC(temp) {
    let tempK = temp - 273;
    return tempK;
}
function kToF(temp) {
    let tempK = ((temp - 273) * 1.8) + 32;
    return tempK;
}
