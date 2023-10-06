function telephoneCheck(str) {
    const patterns = [
        /^\d{3}[-|\s]\d{3}[-|\s]\d{4}$/,
        /^1\s?\d{3}[-|\s]?\d{3}[-|\s]?\d{4}$/,
        /^\d{10}$/, 
        /^\(\d{3}\)\s?\d{3}[-|\s]\d{4}$/,
        /^1\s?\(\d{3}\)\s?\d{3}-?\d{4}$/
    ];

    for (let i = 0; i < patterns.length; i++) {
        if (patterns[i].test(str)) {
            return true;
        }
    }

    return false;
}
  
// console.log(telephoneCheck("555-555-5555"));
// console.log(telephoneCheck("1 555-555-5555"));
// console.log(telephoneCheck("(555)555 5555"));
// console.log(telephoneCheck("1994"));