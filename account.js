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

    // _balance(value, rate){
    //     let rate = 1;
    //     return this._balance(value, rate)
    // }
    

    withdraw(value){
        let rate = 1;
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

}