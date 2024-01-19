const telephoneCheck = (str) => {
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

export default telephoneCheck;
