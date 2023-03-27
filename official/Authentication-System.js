export class AuthenticationSystem {
    static login(authenti, password){
        if(AuthenticationSystem.ehAuthenti(authenti)){
            return authenti.authenticar(password);

        }
        return false;
    }
    static ehAuthenti(authenti){
        return "autenticar" in authenti && authenti.authenticar instanceof Function
    }
}