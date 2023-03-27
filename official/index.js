import {Client} from "./client.js"
import { Manager } from "./official/manager.js"
import { Director } from "./official/director.js"
import { AuthenticationSystem } from "./Authentication-System.js"

const director = new Director("Roberto", 10000, 12345678900);
director.cadpassword("123456")
const manager = new Manager("Ricardo", 5000, 12345678901);
manager.cadpassword("123");

const Client = new Client("Lais", 789712127878, "456")
const loginManger = AuthenticationSystem.login(manager, "123")
const loginDirector = AuthenticationSystem.login(director, "123456")

const loginClient  = AuthenticationSystem.login(Client, "456")

console.log(loginClient, loginDirector, loginManger);