export class Endereco {

    cep: string;
    uf: string;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numeroResidencia: number;
    complemento: string;

    constructor(cep: string, uf: string, estado: string, cidade: string, bairro: string, rua: string, numeroResidencia: number, complemento: string){
        this.cep = cep;
        this.uf = uf;
        this.estado = estado;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numeroResidencia = numeroResidencia;
        this.complemento = complemento;
    }

    public getCep(cep: number): void{
        return console.log(cep);
    }

    public getUf(uf: number): string{
        return uf;
    }

    public getNome(nome: string): string{
        return this.nome;
    }

    public getEnderecoCompleto(rua: string, numeroResidencia: number, bairro: string, complemento: string, cidade: string, cep: number, estado: string, uf: string, ): void{
        this.diaNasc = diaNasc;
        this.mesNasc = mesNasc;
        this.anoNasc = anoNasc;
    }
    
}
