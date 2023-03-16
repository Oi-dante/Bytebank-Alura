export class Account{
    constructor(balanceInitial, client, agency){
        this._balance = balanceInitial;
        this._client = client;
        this._agency = agency;
    }

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
    

    withdraw(value){
        let rate = 1
        const withdrawValue = rate * value;
        if(this._balance >= withdrawValue){
            this._balance -= withdrawValue;
            return withdrawValue;
        }
    }

    deposit(value){
        this._balance += value;           
    }

    tranferir(value, current){
        const valueDrawee = this.withdraw(value);
        current.deposit(valueDrawee);
        
    }   

    test(){
        console.log("test in account class");
    }
}