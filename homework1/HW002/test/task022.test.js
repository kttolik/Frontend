const inumberPrim = require('../task022');

describe('Checking if a prime number', () => {
    test('inumberPrim', () => {
        expect(inumberPrim(12)).toEqual(false);
    })

    test('inumberPrim', () => {
        expect(inumberPrim(5)).toBe(true);
    })

})
