const arrChange = require('../arrChange');
describe('removes duplicate values in an array', () => {
    test('arrChange', () => {
        expect(arrChange([1, 2, 3, 1, 2])).toEqual([1, 2, 3]);
    })

    test('arrChange', () => {
        expect(arrChange(11)).toBe(false);
    })

    test('arrChange', () => {
        expect(arrChange('q')).toBe(false);
    })

    test('arrChange', () => {
        expect(arrChange[1, 2, 3]).toBe([1, 2, 3]);
    })

})