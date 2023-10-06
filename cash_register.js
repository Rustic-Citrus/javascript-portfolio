function checkCashRegister(price, cash, cid) {
    function howManyCoins(coin, changeDue, amountInChange) {
        let quotient = changeDue / coin;
        // console.log(`quotient: ${quotient}`);
        if (coin !== 0.01) {
            quotient = Math.floor(quotient);
        } else {
            quotient = Math.round(quotient);
        }
        let toTakeFromDrawer = quotient * coin;
        // console.log(`toTakeFromDrawer: ${toTakeFromDrawer}`);
        if (toTakeFromDrawer > amountInChange) {
            return amountInChange;
        } else {
            return toTakeFromDrawer;
        }
    }

    let changeDue = cash - price;
    changeDue = Number(changeDue.toFixed(2));
    // console.log(`changeDue: ${changeDue}`);
    const changeArr = {
        status: "OPEN",
        change: []
    };
    let totalInDrawer = 0;
    for (let i = 0; i < cid.length; i++) {
        // console.log(`old totalInDrawer: ${totalInDrawer}`);
        let currentDrawer = cid[i][1];
        // console.log(`currentDrawer: ${currentDrawer}`);
        totalInDrawer += currentDrawer;
        totalInDrawer = Number(totalInDrawer.toFixed(2));
        // console.log(`new totalInDrawer: ${totalInDrawer}`);
    }
    
    if (totalInDrawer < changeDue) {
        changeArr.status = "INSUFFICIENT_FUNDS";
        return changeArr;
    } else if (totalInDrawer === changeDue) {
        changeArr.status = "CLOSED";
        changeArr.change = cid;
        return changeArr;
    }
    
    for (let i = cid.length - 1; i >= 0; i--) {
        let coinValue = 0;
        let coinName = cid[i][0];
        let amountInChange = cid[i][1];
        let amountFromDrawer = 0;
        // console.log(`coinName: ${coinName}, amountInChange: ${amountInChange}`);
        switch (coinName) {
            case "ONE HUNDRED":
                coinValue = 100;
                break;
            case "TWENTY":
                coinValue = 20;
                break;
            case "TEN":
                coinValue = 10;
                break;
            case "FIVE":
                coinValue = 5;
                break;
            case "ONE":
                coinValue = 1;
                break;
            case "QUARTER":
                coinValue = 0.25;
                break;
            case "DIME":
                coinValue = 0.1;
                break;
            case "NICKEL":
                coinValue = 0.05;
                break;
            case "PENNY":
                coinValue = 0.01;
        }
        if (coinValue <= changeDue) {
            // console.log(`(coinValue (${coinValue}) <= changeDue (${changeDue})`);
            amountFromDrawer = howManyCoins(coinValue, changeDue, amountInChange);
            // console.log(`amountFromDrawer: ${amountFromDrawer}`);
            changeDue -= amountFromDrawer;
            changeDue = Number(changeDue.toFixed(2));
            // console.log(`new changeDue: ${changeDue}`);
            changeArr.change.push([coinName, amountFromDrawer]);
        }
    }

    // console.log(`changeDue: ${changeDue}`);
    if (changeDue != 0) {
        changeArr.status = "INSUFFICIENT_FUNDS";
        changeArr.change = [];
        return changeArr;
    }

    return changeArr;
}
  
// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));