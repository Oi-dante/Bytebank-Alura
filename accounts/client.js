export class Client{
    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
        this.password = this.password;
    }

    authenticar(){
        return true;
    }
}