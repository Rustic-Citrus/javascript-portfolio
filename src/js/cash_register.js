export const coins = [
    {
        name: "PENNY",
        value: 0.01
    },
    {
        name: "NICKEL",
        value: 0.05
    },
    {
        name: "DIME",
        value: 0.1
    },
    {
        name: "QUARTER",
        value: 0.25
    },
    {
        name: "ONE",
        value: 1
    },
    {
        name: "FIVE",
        value: 5
    },
    {
        name: "TEN",
        value: 10
    },
    {
        name: "TWENTY",
        value: 20
    },
    {
        name: "HUNDRED",
        value: 100
    }
]

export class Change {
    constructor(coinName, coinValue, amount) {
        this.coin = {
            name: coinName,
            value: coinValue
        }
        this.amount = amount;
        this.id = Math.floor(Math.random() * 100000);
    }
    getCoinsAvailable() {
        if (this.coin.value > 0.01) {
            return Math.floor(this.amount / this.coin.value);
        } else {
            return Math.round(this.amount / this.coin.value);
        }
    }
    withdrawCoins(amount) {
        let coinsWithdrawn = 0;
        let amountWithdrawn = 0;
        if (amount >= this.amount) {
            coinsWithdrawn = this.getCoinsAvailable();
        } else {
            if (this.coin.value > 0.01) {
                coinsWithdrawn = Math.floor(amount / this.coin.value);
            } else {
                coinsWithdrawn = Math.round(amount / this.coin.value);
            }
        }
        amountWithdrawn = coinsWithdrawn * this.coin.value;
        this.setAmount(amount - amountWithdrawn);
        return amountWithdrawn;
    }
    setAmount(newAmount) {
        this.amount = newAmount;
    }
}

export class CashRegister {
    constructor(cashInRegisterArray) {
        this.status = "OPEN";
        this.setCashRegisterChange(cashInRegisterArray);
        this.id = Math.floor(Math.random() * 100000);
    }
    setStatus(status) {
        this.status = status;
    }
    setCashRegisterChange(cashInRegisterArray) {
        this.change = new Array();

        for (let i = 0; i < coins.length; i++) {
            this.change.push(new Change(coins[i].name, coins[i].value, 0));
        }

        for (let i = 0; i < cashInRegisterArray.length; i++) {
            if (cashInRegisterArray[i][0] === this.change[i].coin.name) {
                this.change[i].amount = cashInRegisterArray[i][1];
            }
        }
    }
    getTotal() {
        let total = 0;
        for (let i = 0; i < this.change.length; i++) {
            total += this.change[i].amount;
        }
        return total;
    }
    getCoinValue(coinName) {
        for (let i = 0; i < this.change.length; i++) {
            if (this.change[i].coin.name === coinName) {
                return this.change[i].coin.value;
            }
        }
    }
    getCoinAmount(coinName) {
        for (let i = 0; i < this.change.length; i++) {
            if (this.change[i].coin.name === coinName) {
                return this.change[i].amount;
            }
        }
    }
    getCoins(coinName, amount) {
        let coinsAvailable = 0;
        for (let i = 0; i < this.change.length; i++) {
            if (this.change[i].coin.name === coinName) {
                coinsAvailable = this.change[i].getCoinsAvailable(amount);
            }
        }
        return coinsAvailable;
    }
    getChange(price, cash) {
        // Calculating how much change is due.
        let changeDue = Number(cash - price).toFixed(2);

        // Handling cases where the change due is greater than or equal to the total amount in the cash register.
        let total = this.getTotal();

        if (changeDue > total) {
            this.setStatus("INSUFFICIENT_FUNDS");
        } else if (changeDue === total) {
            this.setStatus("CLOSED");
        }

        // Creating the change array.
        const changeArray = new Array();

        for (let i = 0; i < coins.length; i++) {
            changeArray.push(new Change(coins[i].name, coins[i].value, 0));
        }

        for (let i = this.change.length - 1; i >= 0; i--) {
            // Calculating how much should be withdrawn for this coin.
            let amountWithdrawn = this.change[i].withdrawCoins(changeDue).toFixed(2);
            changeArray[i].amount = amountWithdrawn;
            changeDue -= amountWithdrawn; // Subtract the amount withdrawn from the change due.
        }
        return changeArray;
    }
}

export default CashRegister;
