const minItFunk = require('../task031');

describe('Find the minimum element of an array', () => {
    test('minItFunk', () => {
        expect(minItFunk([22, 11, 5, 3])).toBe(3);
    })

    test('minItFunk', () => {
        expect(minItFunk([22, 11, 5, -3])).toBe(-3);
    })
    test('minItFunk', () => {
        expect(minItFunk([22, 11, 5, 0])).toBe(0);
    })
})