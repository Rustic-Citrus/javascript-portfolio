import telephoneCheck from "../js/telephone_number_validator";
import { useEffect } from "react";

const TelephoneNumberValidator = () => {
  useEffect(() => {
    const handleInput = (e) => {
      e.preventDefault();

      const numberInput = document.getElementById("numberInput").value;
      const output = telephoneCheck(numberInput);

      if (output) {
        document.getElementById("result").innerHTML = "Valid";
      } else {
        document.getElementById("result").innerHTML = "Invalid";
      }
    }

    const checkButton = document.getElementById("checkButton");

    if (checkButton) {
      checkButton.addEventListener("click", handleInput);
    }

    return () => {
      if (checkButton) {
        checkButton.removeEventListener("click", handleInput);
      }
    }
  })

  return (
    <main>
      <h1>Telephone Number Validator</h1>
      <form className="small-application-form">
        <fieldset>
          <label htmlFor="numberInput">Telephone Number: </label>
          <input type="tel" id="numberInput" />
        </fieldset>
      </form>
      <div className="button-group">
        <button id="checkButton"><span className="material-symbols-outlined">check</span> Check</button>
      </div>
      <div>
        <p><strong>Result: </strong><span id="result">Please type a number.</span></p>
        <small>N.B. This tool only works for American phone numbers.</small>
      </div>
    </main>
  );
};

export default TelephoneNumberValidator;