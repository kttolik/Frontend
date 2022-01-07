const showOddItemSum = require('../task035');

describe('count the sum of array elements with odd indices', () => {
    test('showOddItemSum', () => {
        expect(showOddItemSum([22, 11, 5, 3])).toBe(14);
    })
    test('showOddItemSum', () => {
        expect(showOddItemSum([22, 11, 5, -3])).toBe(8);
    })
})