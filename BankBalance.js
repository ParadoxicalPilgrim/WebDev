class BankAccount{
    #balance;
    constructor(balance){
        this.#balance=balance;
    }


    get balance(){
        return this.#balance;
    }

    set balance(newBal){
        if (newBal<0){
            throw new Error(`You are gareeb!`);
        }
        this.#balance=newBal;
    }

    get info(){
        return `${this.#balance}`;
    }
}