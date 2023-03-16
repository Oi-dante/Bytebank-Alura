import { Account } from "./account.js";
import { Client } from "./client.js";

export class CurrentAccount extends Account{
    //class account inheritance
    static NumberOfAccounts = 0;
    constructor(client, agency){
        super(0, client, agency);
        CurrentAccount.NumberOfAccounts += 1;
    }

    teste(){
        super.teste();
        console.log("teste na classe conta corrente")
    }
    

    withdraw(value){
        let rate = 1.1;
        const withdrawValue = rate * value;
        if(this._balance >= withdrawValue){
            this._balance -= withdrawValue;
            return withdrawValue;
        }
    }

}
