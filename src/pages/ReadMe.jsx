import { useState } from "react";

const activeAccordion = {
  accordionClassNames: "accordion active",
  panelStyles: { display: "block" }
};
const passiveAccordion = {
  accordionClassNames: "accordion",
  panelStyles: { display: "none" }
}

const ReadMe = () => {
  const [accordionStateCipher, setAccordionStateCipher] = useState(passiveAccordion);
  const [accordionStateRegister, setAccordionStateRegister] = useState(passiveAccordion);
  const [accordionStatePalindrome, setAccordionStatePalindrome] = useState(passiveAccordion);
  const [accordionStateRoman, setAccordionStateRoman] = useState(passiveAccordion);
  const [accordionStateTelephone, setAccordionStateTelephone] = useState(passiveAccordion);

  const handleAccordionClick = (e, element) => {
    e.preventDefault();

    switch (element) {
      case "caesarCipher":
        if (accordionStateCipher.accordionClassNames === "accordion") {
          setAccordionStateCipher(activeAccordion);
        } else {
          setAccordionStateCipher(passiveAccordion);
        }
        break;
      case "cashRegister":
        if (accordionStateRegister.accordionClassNames === "accordion") {
          setAccordionStateRegister(activeAccordion);
        } else {
          setAccordionStateRegister(passiveAccordion);
        }
        break;
      case "palindromeChecker":
        if (accordionStatePalindrome.accordionClassNames === "accordion") {
          setAccordionStatePalindrome(activeAccordion);
        } else {
          setAccordionStatePalindrome(passiveAccordion);
        }
        break;
      case "romanNumeralConverter":
        if (accordionStateRoman.accordionClassNames === "accordion") {
          setAccordionStateRoman(activeAccordion);
        } else {
          setAccordionStateRoman(passiveAccordion);
        }
        break;
      case "telephoneNumberValidator":
        if (accordionStateTelephone.accordionClassNames === "accordion") {
          setAccordionStateTelephone(activeAccordion);
        } else {
          setAccordionStateTelephone(passiveAccordion);
        }
    }
  }

  return (
    <main className="readme-container">
      <h1>Harry Curtis: JavaScript Portfolio</h1>

      <h2>Introduction</h2>

      <p>The freeCodeCamp JavaScript Algorithms and Data Structures course contains five projects that provide the learner with the opportunity to show off their understanding of the JavaScript programming language. In this application, I have integrated my solutions into a static web application using the React framework. Each of my solutions to the project challenges can be accessed from the dropdown menu above.</p>

      <h2>Description</h2>

      <button className={accordionStateCipher.accordionClassNames} onClick={(e) => { handleAccordionClick(e, "caesarCipher"); }}><h3>Caesar Cipher</h3></button>
      <div className="panel" style={accordionStateCipher.panelStyles}>
        <p>A cipher is a tool that has been used for thousands of years as a means of hiding the true content of a message. A simple way a message can be encrypted with a cipher is by changing a letter for another based on an established method, such as changing each letter for the next in the alphabet (for example, the word "HELLO" would become "IFMMP"). The sender and the intended receiver have access to an algorithm or cipher sheet that allows them to decipher the encrypted message.</p>
        <p>A cipher which simply changes a letter for another based on a fixed number of letters is called a Ceasar cipher, as it was supposedly used by the Roman dictator Julius Caesar in his letters. The Caesar cipher tool allows the user to cipher and decipher phrases according to a specified shift value. The application features a text input field to insert the designated phrase, a select element with options to decrypt or encrypt the text, and a range input slider to change the shift value.</p>
        <p>Ciphers still have a use</p>
        <p>Note that the original challenge varied slightly from the application featured here. For instance, the original challenge only required decryption, not encryption, and the shift value was fixed at 13.</p>
      </div>

      <button className={accordionStateRegister.accordionClassNames} onClick={(e) => { handleAccordionClick(e, "cashRegister"); }}><h3>Cash Register</h3></button>
      <div className="panel" style={accordionStateRegister.panelStyles}>
        <p>Clerks commonly have to calculate the change when serving a customer. Normally, with enough experience, clerks are able to do these calculations quickly, but computers are inevitably faster.</p>
        <p>The cash register application features a proof of concept for a digital cash register where change is calculated. The user types the coins that are available, the price of the item being purchased, and the payment of the customer. When the "Calculate Change" button is pressed, the table below shows how many coins and bills the clerk should return.</p>
        <p>While this particular cash register application is simple and somewhat cumbersome to use, it wouldn't be difficult to implement a database with a mechanical counting system for change. Furthermore, the cash register could also optimise the return of change to favour coins or bills that are more common. As part of my portfolio, the intention for this cash register app is solely as a proof of concept and ability.</p>
      </div>

      <button className={accordionStatePalindrome.accordionClassNames} onClick={(e) => { handleAccordionClick(e, "palindromeChecker"); }}><h3>Palindrome Checker</h3></button>
      <div className="panel" style={accordionStatePalindrome.panelStyles}>
        <p>A palindrome is a symmetrical word, spelt the same backwards as forwards. Some examples are the name "Hannah" and the noun "racecar".</p>

        <p>The palindrome checker application simply takes a word as an input and tells you whether it's a palindrome or not. At face value, this is not particularly useful. After all, it's usually obvious whether a word is a palindrome, especially when written down. However, there are some potential uses for such a tool. Passwords that are palindromes may be easier to crack, as they present a recognisable pattern. Therefore, identifying palindromes automatically can help enforce the creation of stronger passwords. Alternatively, digital versions of word games, either for education or leisure, may benefit from such algorithms, as points may be allocated based on features of the word. As with the other apps, the palindrome checker is a proof of concept.</p>
      </div>

      <button className={accordionStateRoman.accordionClassNames} onClick={(e) => { handleAccordionClick(e, "romanNumeralConverter"); }}><h3>Roman Numeral Converter</h3></button>
      <div className="panel" style={accordionStateRoman.panelStyles}>
        <p>Before Arabic numerals were adopted by most Western civilisations, Roman numerals were the main method of communicating numbers in a written form across Europe. Today, Roman numerals are uncommon, but there are some contexts where they are still used. If you look carefully when watching the end credits of films, you may notice them appear at the very end next to the copyright.</p>
        <p>Due to how uncommon they are, most people are unfamiliar with how to convert Roman numerals into Arabic numerals and vice versa. The Roman numeral converter application partially solves this problem. The user types the number in Arabic numerals, and the app outputs the number as it would appear in Roman numerals.</p>
        <p>It is important to note that the Romans did not seem to have a symbol that referred to values greater than tens of thousands. Instead, it appears as though they used the "M" repeatedly to represent multiples of a thousand.</p>
        <p>The converter application serves primarily as a useful tool for hobbyists, amateur genealogists, and students of history. Increasingly, young people are unfamiliar with how to use Roman numerals, and so such applications may serve some purpose for them in their studies. Alternatively, software that scans historical documents benefit from a Roman numeral converter, as computers are programmed using the Arabic system and are unlikely to recognise Roman numerals.</p>
      </div>

      <button className={accordionStateTelephone.accordionClassNames} onClick={(e) => { handleAccordionClick(e, "telephoneNumberValidator"); }}><h3>Telephone Number Validator</h3></button>
      <div className="panel" style={accordionStateTelephone.panelStyles}s>
        <p>Most countries have a unique method for assigning telephone numbers. In Brazil, each state has its own dialing code, and mobile phone numbers have a 9 before them. Whereas in the United Kingdom, mobile phone numbers normally begin with 07. As a consequence of the numerous possibilities for phone numbers, it's in the interest of organisations that collect contact information to validate phone numbers before they're submitted.</p>
        <p>The tel-type for input tags has been around for almost twenty years now, which has made validating telephone numbers much easier in web applications. Consequently, the utility of a telephone number validation tool is somewhat reduced. However, there are still circumstances where such a script might be useful. For example, applications that don't use a HTML form for data inputs may still require an explicit means of checking phone numbers. Equally, documents that are scanned using OCR may then need to have the information in fields containing telephone numbers validated.</p>
      </div>

      <h2>Contact Me</h2>

      <p>Send me a message using the contact form at <a href="https://www.harryscurtis.com/">harryscurtis.com</a>.</p>
    </main>
  );
};

export default ReadMe;