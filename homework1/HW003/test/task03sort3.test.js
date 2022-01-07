const insertSort = require('../task03sort3');

describe('insertSort array', () => {
    test('insertSort', () => {
        expect(insertSort([1,34,8,99,-1])).toStrictEqual([-1,1,8,34,99]);
    })
})