const factorial = require('../task025');

describe('Calculate factorial of number n', () => {
    test('factorial', () => {
        expect(factorial(4)).toBe(24);
    })

    test('factorial', () => {
        expect(factorial(0)).toBe(1);
    })
    test('factorial', () => {
        expect(factorial(1)).toBe(1);
    })

})
