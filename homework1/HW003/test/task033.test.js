const showMinItem = require('../task033');

describe('the index of the minimum element of the array', () => {
    test('showMinItem', () => {
        expect(showMinItem([22, 11, 5, 3])).toBe(3);
    })

    test('showMinItem', () => {
        expect(showMinItem([22, 11, 5, -3])).toBe(3);
    })
    test('showMinItem', () => {
        expect(showMinItem([-22, 11, 5, 0])).toBe(0);
    })
})