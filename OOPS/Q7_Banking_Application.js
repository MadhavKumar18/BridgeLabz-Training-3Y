class BankAccount {
    #balance;

    constructor(initialBalance = 0) {
        if (!Number.isFinite(initialBalance) || initialBalance < 0) {
            throw new Error("Initial balance must be a non-negative number.");
        }

        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Deposit amount must be greater than zero.");
        }

        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Withdrawal amount must be greater than zero.");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance.");
        }

        this.#balance -= amount;
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(5000);

try {
    account.deposit(2000);
    console.log(`Balance after deposit: ₹${account.getBalance()}`);
} catch (error) {
    console.log(`Transaction failed: ${error.message}`);
}

try {
    account.withdraw(1000);
    console.log(`Balance after withdrawal: ₹${account.getBalance()}`);
} catch (error) {
    console.log(`Transaction failed: ${error.message}`);
}

try {
    account.withdraw(10000);
    console.log(`Balance after withdrawal: ₹${account.getBalance()}`);
} catch (error) {
    console.log(`Transaction failed: ${error.message}`);
}
