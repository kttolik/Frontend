const sumDigits = require('../task026');

describe('Calculate the sum of digits of a given number', () => {
    test('sumDigits', () => {
        expect(sumDigits(123)).toBe(6);
    })

    test('sumDigits', () => {
        expect(sumDigits(777)).toBe(21);
    })

    test('sumDigits', () => {
        expect(sumDigits(0)).toBe(0);
    })

    test('sumDigits', () => {
        expect(sumDigits(1)).toBe(1);
    })

})
