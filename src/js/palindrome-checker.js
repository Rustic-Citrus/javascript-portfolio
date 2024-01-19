function palindrome(str) {
    const newStr = str.toLowerCase().replace(/\W|\s/g, "").replace("_", "");

    const chars = newStr.split("");
    const reversedChars = [];
    chars.forEach(char => reversedChars.push(char));
    reversedChars.reverse();

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] !== reversedChars[i]) {
            return false;
        }
    }

    return true;
}

export default palindrome;
