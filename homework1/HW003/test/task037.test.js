const showOddNum = require('../task037');

describe('Count the number of odd elements in an array', () => {
    test('showOddNum', () => {
        expect(showOddNum([1,2,3,4,5])).toBe('number of odd numbers ' + 3);
    })
    test('showOddNum', () => {
        expect(showOddNum([1,2,3,4,5,11,13,21])).toBe('number of odd numbers ' + 6);
    })

})