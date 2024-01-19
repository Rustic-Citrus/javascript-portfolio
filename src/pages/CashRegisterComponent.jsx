import { coins, Change, CashRegister } from "../js/cash_register.js";
import { useState } from "react";

// Creating the default change array and CashRegister object to prevent errors on startup.
const defaultChangeArray = [];

for (let i = 0; i < coins.length; i++) {
  defaultChangeArray.push(new Change(coins[i].name, coins[i].value, 0));
}

const defaultCashRegister = new CashRegister(defaultChangeArray);

const CashRegisterComponent = () => {
  const [changeArr, setChangeArr] = useState(defaultChangeArray);
  const [cashRegister, setCashRegister] = useState(defaultCashRegister);

  const handleCalculateChange = (e) => {
    e.preventDefault();

    const price = Number(document.getElementById("itemPrice").value);
    const cash = Number(document.getElementById("changeFor").value);

    // Basic error handling
    let errorMessage = "";

    if (cash < price) {
      errorMessage = "ERROR: The value of the change must be greater than the price of the item."
      console.error(errorMessage);
      return alert(errorMessage);
    } else if (cash < 0) {
      errorMessage = "ERROR: The value of the change must be greater than 0.";
      console.error(errorMessage);
      return alert(errorMessage);
    } else if (price < 0) {
      errorMessage = "ERROR: The price of the item must be greater than 0.";
      console.error(errorMessage);
      return alert(errorMessage);
    }

    // Creating the CashRegister object from the data in the input elements.
    const cashInRegisterArray = new Array();

    for (let i = 0; i < coins.length; i++) {
      const elementId = `${String(coins[i].name).toLowerCase()}Total`;
      const input = document.getElementById(elementId);
      let amount = input.value * coins[i].value;
      if (coins[i].value < 1 && coins[i].value === 0.01) {
        amount = Math.round(amount * 100) / 100;
      } else if (coins[i].value < 1 && coins[i].value > 0.01) {
        amount = Math.floor(amount * 100) / 100;
      } else {
        amount = Math.floor(amount);
      }

      cashInRegisterArray.push([coins[i].name, amount]);
    }

    const userCashRegister = new CashRegister(cashInRegisterArray);

    // Creating the changeArray.
    const change = userCashRegister.getChange(price, cash);

    change.sort((a, b) => b.getCoinsAvailable() - a.getCoinsAvailable());

    setChangeArr(change);
    setCashRegister(userCashRegister);
  }

  return (
    <main>
      <h1>Cash Register</h1>
      <form className="large-application-form">
        {cashRegister.change.map(coin => <ChangeInputFieldset key={coin.id} coinObject={coin} />)}
        <fieldset>
          <label htmlFor="itemPrice"><strong>Price</strong>: </label>
          <input type="number" id="itemPrice" defaultValue={0} min="0" required />
        </fieldset>
        <fieldset>
          <label htmlFor="changeFor"><strong>Change for</strong>: </label>
          <input type="number" id="changeFor" defaultValue={0} min="0" required />
        </fieldset>
      </form>
      <div className="button-group">
        <button id="calculateChangeButton" onClick={handleCalculateChange}><span className="material-symbols-outlined">calculate</span> Calculate Change</button>
      </div>

      <Table key={cashRegister.id} changeArrayProp={changeArr} cashRegisterObject={cashRegister} />

    </main>
  );
};

const ChangeInputFieldset = ({ coinObject }) => {
  const idAttribute = `${coinObject.coin.name.toLowerCase()}Total`;
  let name = "unassigned";
  if (coinObject.coin.name[coinObject.coin.name.length - 1] === "Y") {
    name = coinObject.coin.name[0] + coinObject.coin.name.slice(1, coinObject.coin.name.length - 1).toLowerCase() + "ies";
  } else {
    name = coinObject.coin.name[0] + coinObject.coin.name.slice(1, coinObject.coin.name.length).toLowerCase() + "s";
  }

  return (
    <fieldset>
      <label htmlFor={idAttribute}><strong>{name}</strong> (${coinObject.coin.value.toFixed(2)}): </label>
      <input type="number" id={idAttribute} defaultValue={0} min="0"></input>
    </fieldset>
  );
}

const Table = ({ changeArrayProp, cashRegisterObject }) => {
  const total = cashRegisterObject.getTotal();

  return (
    <table>
      <caption><strong>Change Due</strong></caption>
      <caption><strong>Cash Register Status</strong>: {cashRegisterObject.status}</caption>
      <caption><strong>Total Remaining in Cash Register</strong>: ${total.toFixed(2)}</caption>
      <thead>
        <tr>
          <td><strong>Coin or Bill</strong></td>
          <td><strong>No. of Coins/Bills</strong></td>
        </tr>
      </thead>
      <tbody>
        {changeArrayProp.map(change => <TableRow key={change.id} changeObject={change} />)}
      </tbody>
    </table>
  );
}

const TableRow = ({ changeObject }) => {
  return (
    <tr>
      <td>{changeObject.coin.name[0]}{changeObject.coin.name.toLowerCase().slice(1, changeObject.coin.name.length)}</td>
      <td>{changeObject.getCoinsAvailable()}</td>
    </tr>
  );
};

export default CashRegisterComponent;