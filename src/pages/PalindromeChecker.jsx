import palindrome from "../js/palindrome-checker.js";
import { useEffect } from "react";

const PalindromeChecker = () => {
  useEffect(() => {
    const handleInput = (e) => {
      e.preventDefault();

      const input = document.getElementById("palindromeInput").value;

      const isPalindrome = palindrome(input);
      let textToDisplay = "";

      if (isPalindrome) {
        textToDisplay = `Yes, "${input}" is a palindrome!`;
      } else {
        textToDisplay = `Nope, "${input}" is not a palindrome.`;
      }

      document.getElementById("result").innerHTML = textToDisplay;
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
      <h1>Palindrome Checker</h1>
      <form className="small-application-form">
        <fieldset>
          <label htmlFor="palindromeInput">Type your word here: </label>
          <input type="text" id="palindromeInput" />
        </fieldset>
      </form>
      <div className="button-group">
        <button id="checkButton"><span className="material-symbols-outlined">check</span> Check</button>
      </div>
      <div>
        <p><strong>Result: </strong><span id="result">Please type a word.</span></p>
      </div>
    </main>
  );
};

export default PalindromeChecker;