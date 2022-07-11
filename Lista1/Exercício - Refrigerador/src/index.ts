var botao = document.getElementById("botao") as HTMLButtonElement;

botao.onclick = function(){

class Refrigerador {
    marca: string; 
    litragem: number;
    portas: number;
    frostFree: boolean;

    constructor(marca: string, litragem: number, portas: number, frostFree: boolean){
        this.marca = marca; 
        this.litragem = litragem;
        this.portas = portas; 
        this.frostFree = frostFree; 
    }

    mostrarInfoGeladeira(): void{
        console.log(`Marca do refrigerador: ${this.marca}\nLitragem do refrigerador: ${this.litragem}\nQuantidade de portas: ${this.portas}\nÉ FrostFree: ${this.frostFree}\n`);  
    }

}

const geladeira = new Refrigerador("Panasonic", 403, 2, true); 

console.log(geladeira.mostrarInfoGeladeira());
}