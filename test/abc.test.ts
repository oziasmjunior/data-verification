import CPF from "../src";

describe('Validar CPF', () => {
    test('CPF valido', async () => {
        let value = "10291558950"
        let result = CPF(value)

        expect(result.isValid).toBe(true);
        expect(result.value).toBe(value);
        expect(result.name).toBe("DocumentSuccess");
        expect(result.message).toBe("Document informed is valid.");
    }),
    test('CPF com menos numeros', async () => {
        let value = "1029155895"
        let result = CPF(value)

        expect(result.isValid).toBe(false);
        expect(result.value).toBe(value);
        expect(result.name).toBe("DocumentException");
        expect(result.message).toBe("The value informed must be numeric with 11 digits.");
    }),
    test('CPF com mais numeros', async () => {
        let value = "102915589501"
        let result = CPF(value)

        expect(result.isValid).toBe(false);
        expect(result.value).toBe(value);
        expect(result.name).toBe("DocumentException");
        expect(result.message).toBe("The value informed must be numeric with 11 digits.");
    }),
    test('CPF com letra', async () => {
        let value = "1O291558950"
        let result = CPF(value)

        expect(result.isValid).toBe(false);
        expect(result.value).toBe(value);
        expect(result.name).toBe("DocumentException");
        expect(result.message).toBe("The value entered must contain only numbers.");
    })
})