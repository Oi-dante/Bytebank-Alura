export class Employee{
    constructor(name, salary, cpf){
        this._name = name;
        this._salary = salary;
        this._cpf = cpf;

        this._bonus = 1; 
        this._password = password;
    }

    get password(){
        return this.password;
    }

    registerPassword(password){
        this.password = password;
    }

    
}