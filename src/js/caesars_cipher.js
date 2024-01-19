const alphabet = [];

for (let i = 65; i < 91; i++) {
    alphabet.push(String.fromCharCode(i));
}

export const caesarCipherFunc = (mode, string, shiftString) => {
    const shiftNumber = Number(shiftString);
    const stringArray = string.split("");
    const newStringArray = new Array();
    let errorMessage = new String();

    // Check if the value of the shift is within the required range.
    if (shiftNumber > 25 || shiftNumber < -25) {
        errorMessage = "ERROR: The shift value must be greater than or equal to -25 and less than or equal to 25.";
        console.error(errorMessage);
        return alert(errorMessage);
    }

    for (let i = 0; i < stringArray.length; i++) {
        if (/\w/.test(stringArray[i])) {
            let letterIndex = alphabet.indexOf(stringArray[i][0].toUpperCase());
            let newLetterIndex = 0;
            let handledLetterIndex = 0;

            // Create new letter index value.
            if (letterIndex > -1) {
                if (mode === "encryption") {
                    newLetterIndex = letterIndex + shiftNumber;
                } else if (mode === "decryption") {
                    newLetterIndex = letterIndex - shiftNumber;
                } else {
                    errorMessage = "ERROR: Invalid mode value.";
                    console.error(errorMessage);
                    return alert(errorMessage);
                }
            } else {
                newStringArray.push(" ");
            }

            // Handle new letter index values that fall outside of the range.
            if (newLetterIndex >= alphabet.length) {
                handledLetterIndex = newLetterIndex - alphabet.length;
            } else if (newLetterIndex < 0) {
                handledLetterIndex = alphabet.length + newLetterIndex;
            } else {
                handledLetterIndex = newLetterIndex;
            }
            
            const newLetter = alphabet[handledLetterIndex];
            newStringArray.push(newLetter);
        } else {
            newStringArray.push(stringArray[i]);
        }
    }

    const newString = newStringArray.join("");

    return newString;
}

export default caesarCipherFunc;
