export class Validate {
    static email(email: string){
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){
            return true;
        }
        return false;
    }
    static password(password: string){
        if (password.length >= 6){
            return true;
        }
        return false;
    }
}