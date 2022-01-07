const changeArr = require('../task036');

describe('reverse array', () => {
    test('changeArr', () => {
        expect(changeArr([22, 11, 5, 3])).toStrictEqual([3, 5,  11, 22]);
    })

})