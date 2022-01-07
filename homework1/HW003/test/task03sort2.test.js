const selectionSort = require('../task03sort2');

describe('selectionSort array', () => {
    test('selectionSort', () => {
        expect(selectionSort([1,34,8,99,-1])).toStrictEqual([-1,1,8,34,99]);
    })
})