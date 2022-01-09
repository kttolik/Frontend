const getCookingTime = require('../task1');

describe('getCookingTime', () => {
    test('getCookingTime', () => {
        expect(getCookingTime(0)).toBe(0);
    })
    test('getCookingTime', () => {
        expect(getCookingTime(5)).toBe(5);
    })
    test('getCookingTime', () => {
        expect(getCookingTime(10)).toBe(10);
    })
    test('getCookingTime', () => {
        expect(getCookingTime(15)).toBe(15);
    })
    test('getCookingTime', () => {
        expect(getCookingTime(6)).toBe(10);
    })

    test('getCookingTime', () => {
        expect(getCookingTime(4)).toBe(5);
    })

    test('getCookingTime', () => {
        expect(getCookingTime(11)).toBe(15);
    })

})