function BankAccount(balance) {
    // Initialize balance and transactions properties
    this.balance = balance;
    this.transactions = []
}

// Define deposit method on BankAccount's prototype
BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
    this.transactions.push(`Deposited ${amount}`);
    return this.transactions;
}

// Define withdraw method on BankAccount's prototype
BankAccount.prototype.withdraw = function(amount){
    if(this.balance < amount){
        this.transactions.push("Insufficient balance")
    }else{
            this.balance -= amount;
            this.transactions.push(`Withdrew ${amount}`);

    }
    return this.transactions[this.transactions.length - 1]; 
}
// Define getTransactionHistory method on BankAccount's prototype
BankAccount.prototype.getTransactionHistory = function(){
    return this.transactions;
}


const b = new BankAccount(200);
console.log(b.withdraw(300));

