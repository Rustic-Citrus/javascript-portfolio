import convertToRoman from "../js/roman_numeral_converter";
import { useEffect } from "react";

const RomanNumeralConverter = () => {
  useEffect(() => {
    const handleInput = (e) => {
      e.preventDefault();

      const input = document.getElementById("numberInput").value;
      const output = convertToRoman(input);

      if (output === "NaN" || output === "") {
        alert("Please enter a number.");
        return;
      }

      document.getElementById("result").innerHTML = output;
    }

    const convertButton = document.getElementById("convertButton");

    if (convertButton) {
      convertButton.addEventListener("click", handleInput);
    }

    return () => {
      if (convertButton) {
        convertButton.removeEventListener("click", handleInput);
      }
    }
  });

  return (
    <main>
      <h1>Roman Numeral Converter</h1>
      <form className="small-application-form">
        <fieldset>
          <label htmlFor="convertButton">Type a number: </label>
          <input type="number" id="numberInput" />
        </fieldset>
      </form>
      <div className="button-group">
        <button id="convertButton"><span className="material-symbols-outlined">change_circle</span> Convert</button>
      </div>
      <div>
        <p><strong>Result: </strong><span id="result">Please type a number.</span></p>
      </div>
    </main>
  );
};

export default RomanNumeralConverter;