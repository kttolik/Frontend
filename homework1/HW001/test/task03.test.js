const positiveNum = require('../task03');

describe('Find the sums of only positives of three numbers', () => {
    test('positiveNum', () => {
        expect(positiveNum(2, 4, 10)).toBe(16);
    })

    test('positiveNum', () => {
        expect(positiveNum(-1, -4, 2)).toBe('нет суммы');
    })

    test('positiveNum', () => {
        expect(positiveNum(-1, 4, 2)).toBe(6);
    })
    test('positiveNum', () => {
        expect(positiveNum(1, -4, 2)).toBe(3);
    })
    test('positiveNum', () => {
        expect(positiveNum(1, 4, -2)).toBe(5);
    })


})