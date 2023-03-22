import { Account } from "./account.js";

export class SavingAccount extends Account{
    //class account inheritance
    constructor(balanceInitial, client, agency){
        super(balanceInitial, client, agency)
    }

    withdraw(value){
        const rate = 1.02;
        return this._balance(value, rate);
    }

}