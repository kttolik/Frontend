const sumEven = require('../task01');

describe('If a is even count a * b, otherwise a + b', () => {
    test('sumEven', () => {
        expect(sumEven(12)).toBe(144);
    })

    test('sumEven', () => {
        expect(sumEven(11)).toBe(23);
    })

})