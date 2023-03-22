import { Account } from "./account.js";

export class CurrentAccount extends Account{
    //class account inheritance
    static NumberOfAccounts = 0;
    constructor(client, agency){
        super(0, client, agency);
        CurrentAccount.NumberOfAccounts += 1;
    }
    
    withdraw(value){
        let rate = 1.1;
        return this._balance(value, rate);
        
        //overriding the withdraw behavior
    }

}
