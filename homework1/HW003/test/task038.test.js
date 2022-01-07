const halfСhange = require('../task038');

describe('Swap the first and second half of the array', () => {
    test('halfСhange', () => {
        expect(halfСhange([22, 11, 5, 3])).toStrictEqual([3, 5, 22, 11]);
    })

    test('halfСhange', () => {
        expect(halfСhange([22, 11, 5, 3, 7])).toStrictEqual([7, 3, 22, 11, 5]);
    })
})