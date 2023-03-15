import {Client} from "./client.js"
import {CurrentAccount} from "./checking-account.js"
import {SavingAccount} from "./savings-account.js";
import { Account } from "./account.js";

const client1 = new Client("Ricardo", 11122233309);


const currentAccountRicardo = new Account(0, client1, 1001);
currentAccountRicardo.deposit(500);
currentAccountRicardo.withdraw(100);

const savingAccount = new Account(50, client1, 1001);

console.log(savingAccount);
console.log(currentAccountRicardo);