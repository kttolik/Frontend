const smallPyramid = require('../smallPyramid');

describe('smallPyramid', () => {

    test('test', () => {
        expect(true).toBe(true);
    });

    test('draw small pyramid', () => {
        expect(smallPyramid())
            .toEqual('                     \n' +
                '                     \n' +
                '                     \n' +
                '          *          \n' +
                '       *     *       \n' +
                '    *           *    \n' +
                ' *  *  *  *  *  *  * \n');
    });

})