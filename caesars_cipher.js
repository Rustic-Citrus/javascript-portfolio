function rot13(str) {
    const arr = str.split("");
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (/\w/.test(arr[i])) {
            let char = arr[i][0];
            let charCode = arr[i].charCodeAt(0);
            let newCharCode = charCode;

            if (charCode < 78) {
                newCharCode += 13;
            } else {
                newCharCode -= 13;
            }

            let newChar = String.fromCharCode(newCharCode);
            newArr.push(arr[i].replace(char, newChar));
        } else {
            newArr.push(arr[i]);
        }
    }

    let newStr = newArr.join("");

    return newStr;
}
  
console.log(rot13("SERR PBQR PNZC"));