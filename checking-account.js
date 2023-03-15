import { Client } from "./client.js";

export class CurrentAccount{
    static NumberOfAccounts = 0;
    


    set client(newValue){
        if(newValue instanceof Client){
            this._client = newValue;
        }
    }

    get client(){
        return this._client;
    }

    get balance(){
        return this._balance;
    }

    constructor(agency, client){
        this.agency = agency;
        this.client = client;
        this._balance = 0
        CurrentAccount.NumberOfAccounts += 1;
    }


    withdraw(value){
        if(this._balance >= value){
            this._balance -= value;
            return value;
        }
    }

    deposit(value){
        if(value <= 0)
        {
            return;
        } 
        this._balance += value;           
    }

    tranferir(value, current){
        
        const valueDrawee = this.withdraw(value);
        current.deposit(valueDrawee);
        
    }
}
