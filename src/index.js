function DocumentBrazil(number) {
    let result = false;
    if (number.length === 11) {
        number = number.split("")
        let VerifyingDigit = []
        for (let digit = 0; VerifyingDigit.length < 2; digit++) {
            let calculate = 0;
            for (let i = 0; i < (9 + digit); i++) {
                calculate += (number[i] * (10 + digit - i));
            }
            VerifyingDigit[digit] = calculate % 11 < 2 ? 0 : 11 - (calculate % 11)
        }
        result = VerifyingDigit[0] === parseInt(number[9]) && VerifyingDigit[1] === parseInt(number[10])
    }
    console.log(result);
    return result
}

export default DocumentBrazil