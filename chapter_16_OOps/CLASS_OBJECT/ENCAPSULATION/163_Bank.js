class ICICI {
    #balance;

    constructor(name, balance) {
        this.#balance = balance;
        this.name = name;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        } else {
            console.log("Not allowed")
        }
    }
}

let meeti = new ICICI("Meeti", 1000);
console.log(`meeti.getBalance() is ${meeti.getBalance()}`);
meeti.setBalance(10000000, false);
console.log(`meeti.getBalance() after change is ${meeti.getBalance()}`); 
// This will not change the balance because the second argument is false, which means that the user is not a cashier and therefore does not have permission to change the balance.

let meeti_father = new ICICI("Pramod", 2000);
console.log(`meeti_father.getBalance() is ${meeti_father.getBalance()}`);
meeti_father.setBalance(300000, true);
// This will change the balance because the second argument is true, which means that the user is a cashier and therefore has permission to change the balance.
console.log(`meeti_father.getBalance() after change is ${meeti_father.getBalance()}`);