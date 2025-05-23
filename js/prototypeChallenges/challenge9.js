// You need to implement the BankAccount constructor function and its prototype methods

function BankAccount(accountNumber, holderName, balance) {
    // Initialize accountNumber, holderName, and balance properties
    this.accountNumber = Number(accountNumber);
    this.holderName = holderName;
    this.balance = Number(balance);
}

// Define deposit method on BankAccount's prototype
BankAccount.prototype.deposit = function(amount){
  this.balance += amount;
  return this.balance
}

BankAccount.prototype.withdraw = function(amount){
    if(this.balance < amount){
      return "Insufficient balance"
    }else{
      this.balance -= amount;
    }
    return this.balance
  }

  BankAccount.prototype.transfer = function(amount, targetAccount){
    if (this.balance >= amount) {
      this.balance -= amount;
      targetAccount.balance += amount;
      return `Transferred ${amount} from ${this.name} to ${targetAccount.name}`;
    } else {
      return "Insufficient funds";
    }
  }


const p1 = new BankAccount(231, "Sush", 5000)
console.log((p1.deposit(2000)));


