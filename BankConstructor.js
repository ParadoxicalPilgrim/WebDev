function BankAccount(accountNumber,owner,balance){
    this.accountNumber=accountNumber;
    this.owner=owner;
    this.balance=balance;

    this.deposit=function(amount){
        this.balance+=amount;
    };

    this.withdraw=function(amount){
        if (amount<=this.balance){
            this.balance-=amount;
        } else{
            console.log('Insufficient balance.')
        };
    }
}

BankAccount.prototype.getBalance=function(){
    console.log(`The balance in your account is: ${this.balance}`);
}