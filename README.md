#  Bank Account Manager (JavaScript)

This project is a **Bank Account Manager** built using **vanilla JavaScript**.  
It was created as part of the **freeCodeCamp JavaScript Algorithms and Data Structures** curriculum.

The main goal of this project is to practice **JavaScript fundamentals**, especially **classes, state management, and array manipulation**, using a realistic scenario.

---

##  Features

- Create a bank account with an initial balance
- Deposit money with validation
- Withdraw money with balance checks
- Track all transactions
- Display current balance
- List all deposits
- List all withdrawals

---

##  Concepts Practiced

- JavaScript classes and constructors
- Object-oriented programming (OOP)
- Managing internal state (`balance` and `transactions`)
- Input validation
- Arrays of objects
- Filtering and processing data

---

##  Notes

- This is a **logic-only project** (JavaScript only).
- No HTML or CSS is included.
- The project may feel simple, but that reflects progress — concepts that were once difficult now feel natural.
- It represents a step forward in understanding clean and structured JavaScript code.

---

##  Example Usage

```js
const myAccount = new BankAccount();

myAccount.deposit(500);
myAccount.deposit(700);
myAccount.withdraw(300);

console.log(myAccount.checkBalance());
console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());
