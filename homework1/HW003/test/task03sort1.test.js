const bubbleSort = require('../task03sort1');

describe('bubbleSort array', () => {
    test('bubbleSort', () => {
        expect(bubbleSort([1,34,8,99,-1])).toStrictEqual([-1,1,8,34,99]);
    })
})