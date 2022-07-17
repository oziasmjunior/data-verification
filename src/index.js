function DocumentBrazil(documentNumber) {
    if (!/^[0-9]+$/.test(number))
        return { isValid: false, value: documentNumber, name: "DocumentException", message: "The value entered must contain only numbers." }

    if (documentNumber.length !== 11)
        return { isValid: false, value: documentNumber, name: "DocumentException", message: "The value informed must be numeric with 11 digits." }

    if (documentNumber.length === 11) {
        let number = documentNumber.split("")
        let VerifyingDigit = []
        for (let digit = 0; VerifyingDigit.length < 2; digit++) {
            let calculate = 0;
            for (let i = 0; i < (9 + digit); i++) {
                calculate += (number[i] * (10 + digit - i));
            }
            VerifyingDigit[digit] = calculate % 11 < 2 ? 0 : 11 - (calculate % 11)
        }
        let result = VerifyingDigit[0] === parseInt(number[9]) && VerifyingDigit[1] === parseInt(number[10]);

        return {
            isValid: result,
            value: documentNumber,
            name: result ? "DocumentSuccess" : "DocumentException",
            message: result ? "Document informed is valid." : "The document informed is not valid check if it was typed correctly."
        }
    }
}

export default DocumentBrazil