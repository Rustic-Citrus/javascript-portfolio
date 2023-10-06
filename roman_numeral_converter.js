function convertToRoman(num) {
    const romanNumerals = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I"
    }
    const keys = Object.keys(romanNumerals).reverse();
    const arr = [];

    for (let i = 0; i < keys.length; i++) {
        if (num >= keys[i]) {
            let charAmount = Math.floor(num / parseInt(keys[i]));
            num -= charAmount * parseInt(keys[i]);
            let str = "";
            for (let j = 0; j < charAmount; j++) {
                str += romanNumerals[keys[i]];
            }
            arr.push(str);
        }
    }

    let romanNumeral = arr.join("");

    return romanNumeral;
}

console.log(convertToRoman(36)); // "XXXVI"