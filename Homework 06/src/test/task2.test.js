const getNumber = require('../task2');

describe('getNumber', () => {
    test('getNumber', () => {
        expect(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])).toBe(4);
    })
    test('getNumber', () => {
        expect(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])).toBe(13);
    })

})