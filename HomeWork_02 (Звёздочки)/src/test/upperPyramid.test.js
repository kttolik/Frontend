const upperPyramid = require('../upperPyramid');

describe('upperPyramid', () => {

    test('test', () => {
        expect(true).toBe(true);
    });

    test('draw upper small pyramid', () => {
        expect(upperPyramid())
            .toEqual(' *  *  *  *  *  *  * \n' +
                '    *           *    \n' +
                '       *     *       \n' +
                '          *          \n' +
                '                     \n' +
                '                     \n' +
                '                     \n');
    });

})