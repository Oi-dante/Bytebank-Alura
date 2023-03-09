import {Client} from "./client.js"
import {CurrentAccount} from "./checking-account.js"
import { SavingAccount } from "./savings-account.js";

const client1 = new Client("Ricardo", 11122233309);


const currentAccountRicardo = new CurrentAccount(1001, client1);
currentAccountRicardo.deposit(500);
currentAccountRicardo.withdraw(100);

const savingAccount = new SavingAccount(50, client1, 1001);

console.log(savingAccount);
console.log(currentAccountRicardo);