const getNextPalindrome = require('../task5');

describe('getNextPalindrome', () => {
    test('getNextPalindrome', () => {
        expect(getNextPalindrome(7)).toBe(11);
    })
    test('getNextPalindrome', () => {
        expect(getNextPalindrome(99)).toBe(101);
    })
    test('getNextPalindrome', () => {
        expect(getNextPalindrome(132)).toBe(141);
    })
    test('getNextPalindrome', () => {
        expect(getNextPalindrome(888)).toBe(898);
    })
    test('getNextPalindrome', () => {
        expect(getNextPalindrome(999)).toBe(1001);
    })

})