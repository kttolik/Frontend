const showMaxItem = require('../task034');

describe('the index of the minimum element of the array', () => {
    test('showMaxItem', () => {
        expect(showMaxItem([22, 11, 5, 3])).toBe(0);
    })

    test('showMaxItem', () => {
        expect(showMaxItem([22, 11, 5, 43])).toBe(3);
    })
    test('showMaxItem', () => {
        expect(showMaxItem([-22, 11, 5, 0])).toBe(1);
    })
})