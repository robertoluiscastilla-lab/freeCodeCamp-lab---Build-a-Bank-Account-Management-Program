class BankAccount {
  constructor () {
    this.balance = 0
    this.transactions = []
  }

  deposit(depositAmount) {
    if (typeof depositAmount!== "number") return "Deposit should be a number."
    if (depositAmount<=0) return "Deposit amount must be greater than zero."

    this.transactions.push({
      type: "deposit",
      amount: depositAmount
    })
    this.balance += depositAmount
    return `Successfully deposited $${depositAmount}. New balance: $${this.balance}`
  }

  withdraw(withdrawAmount){
    if(withdrawAmount<=0 || withdrawAmount>this.balance) {
      return "Insufficient balance or invalid amount."    }

    this.transactions.push({
      type: "withdraw",
      amount: withdrawAmount
    })

    this.balance -= withdrawAmount
    return `Successfully withdrew $${withdrawAmount}. New balance: $${this.balance}`
  }

  checkBalance(){
    return `Current balance: $${this.balance}`
  }

  listAllDeposits(){
    let result = []
    this.transactions.filter(transaction => {
    if (transaction.type==="deposit"){
    result.push(transaction.amount)}
    })
    return `Deposits: ${result.join(",")}`

  }

  listAllWithdrawals(){
    let result = []
    this.transactions.filter(transaction => {
    if (transaction.type==="withdraw"){
    result.push(transaction.amount)}
    })
    return `Withdrawals: ${result.join(",")}`
  }
}

const myAccount = new BankAccount()
myAccount.deposit(500)
myAccount.deposit(700)
myAccount.deposit(900)
myAccount.withdraw(300)
myAccount.withdraw(900)
console.log(myAccount.checkBalance())
console.log(myAccount.listAllDeposits())
console.log(myAccount.listAllWithdrawals())