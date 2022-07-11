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

    public calculaIdade(data: any, dia: number, mes: number, ano: number): any {
        data = new Date();
        dia = data.getDay();
        mes = data.getMonth();
        ano = data.getYear();

        return console.log(data)
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
