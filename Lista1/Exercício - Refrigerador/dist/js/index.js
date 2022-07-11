"use strict";
var botao = document.getElementById("botao");
botao.onclick = function () {
    class Refrigerador {
        constructor(marca, litragem, portas, frostFree) {
            this.marca = marca;
            this.litragem = litragem;
            this.portas = portas;
            this.frostFree = frostFree;
        }
        mostrarInfoGeladeira() {
            console.log(`Marca do refrigerador: ${this.marca}\nLitragem do refrigerador: ${this.litragem}\nQuantidade de portas: ${this.portas}\nÉ FrostFree: ${this.frostFree}\n`);
        }
    }
    const geladeira = new Refrigerador("Panasonic", 403, 2, true);
    console.log(geladeira.mostrarInfoGeladeira());
};
