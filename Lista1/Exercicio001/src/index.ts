export class Pessoa {

    nome: string;
    idade: number;
    diaNasc: number;
    mesNasc: number;
    anoNasc: number;

    constructor(nome: string, idade: number, diaNasc: number, mesNasc: number, anoNasc: number){
        this.nome = nome;
        this.idade = idade;
        this.diaNasc = diaNasc;
        this.mesNasc = mesNasc;
        this.anoNasc = anoNasc;
    }

    public calculaIdade(dia: number, mes: number, ano: number): any {
        this.idade = 
    }

    public getIdade(idade: number): number {
        return this.idade;
    }

    public getNome(nome: string): string{
        return this.nome;
    }

    public setDataDeNascimento(diaNasc: number, mesNasc: number, anoNasc: number): void{
        this.diaNasc = diaNasc;
        this.mesNasc = mesNasc;
        this.anoNasc = anoNasc;
    }
    
}
