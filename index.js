import {Client} from "./client.js"
import {CurrentAccount} from "./checking-account.js"
import {SavingAccount} from "./savings-account.js";
import { SalaryAccount } from "./salary-account.js";

const client1 = new Client("Ricardo", 11122233309);


const currentAccountRicardo = new CurrentAccount( client1, 1001);
const savingAccount = new SavingAccount(50, client1, 1001);

const SalaryAccount = new SalaryAccount(client1);
salaryAccount.deposit(100);
// SalaryAccount.balance(10);
console.log(SalaryAccount);

// console.log(account);
