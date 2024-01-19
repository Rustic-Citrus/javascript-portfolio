import caesarCipherFunc from "../js/caesars_cipher";
import { useState } from "react";

const CaesarCipher = () => {
  const [cipheredText, setCipheredText] = useState("Please type a phrase to begin.");
  const [shiftValue, setShiftValue] = useState(0);

  const handleCaesarCipherFunc = (e) => {
    e.preventDefault();

    const mode = document.getElementById("modeSelect").value;

    const newCipherText = document.getElementById("cipherTextInput").value;

    setCipheredText(caesarCipherFunc(mode, newCipherText, shiftValue));
    document.getElementById("cipherTextInput").value = "";
  }

  const handleRangeInput = (e) => {
    const shiftRangeInputValue = document.getElementById("shiftRangeInput").value;
    setShiftValue(shiftRangeInputValue);
  }

  return (
    <main>
      <h1>Caesar Cipher</h1>
      <form className="medium-application-form">
        <fieldset>
          <label htmlFor="cipherTextInput">Text to (de)cipher: </label>
          <input type="text" id="cipherTextInput" />
        </fieldset>
        <fieldset>
          <label htmlFor="modeSelect">Select encryption/decryption: </label>
          <select name="modeSelect" id="modeSelect">
            <option value="encryption">Encryption</option>
            <option value="decryption">Decryption</option>
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="shiftRange">Shift: {shiftValue}</label>
          <input type="range" name="shiftRangeInput" className="slider" id="shiftRangeInput" min={-25} max={25} defaultValue={0} onChange={handleRangeInput} />
        </fieldset>
      </form>
      <div className="button-group">
        <button id="cipherButton" onClick={handleCaesarCipherFunc}><span className="material-symbols-outlined">lock</span> Encrypt/Decrypt</button>
      </div>
      <div>
        <p><strong>Result: </strong><span id="cipherOutput">{cipheredText}</span></p>
      </div>
    </main>
  );
};

export default CaesarCipher;