import {Client} from "./client.js"
import {CurrentAccount} from "./checking-account.js"
import {SavingAccount} from "./savings-account.js";
import { Account } from "./account.js";

const client1 = new Client("Ricardo", 11122233309);


const currentAccountRicardo = new CurrentAccount( client1, 1001);
const savingAccount = new SavingAccount(50, client1, 1001);
const account = new Account(0, client1, 1001);

// console.log(account);
