export class SavingAccount{
    constructor(balanceInitial, client, agency){
        this._balance = balanceInitial;
        this._client = client;
        this._agency = agency;
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