const isPalindrome = require('../isPalindrome');

describe('isPalindrome', () => {
    test('isPalindrome', () => {
        expect(true).toBe(true);
    })

    test('isPalindrome', () => {
        expect(true).toBe(true);
        expect(isPalindrome('rur')).toEqual(true);
    })

    test('isPalindrome', () => {
        expect(false).toBe(false);
        expect(isPalindrome('tur')).toBe(false);
    })

})

