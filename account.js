export class Account{
    constructor(balanceInitial, client, agency){
        if(this.constructor == Account){
            throw new Error("You shouldn't instantiate an object of type Account directly");
        }
        this._balance = balanceInitial;
        this._client = client;
        this._agency = agency;
        //abstract class

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
        
    }
    

    _balance(value){
        const withdrawValue = rate * value;
        if(this._balance >= withdrawValue){
            this._balance -= withdrawValue;
            return withdrawValue;
        }
        return 0
    }

    deposit(value){
        this._balance += value;           
    }

    tranferir(value, current){
        const valueDrawee = this.withdraw(value);
        current.deposit(valueDrawee);
        
    }   

}