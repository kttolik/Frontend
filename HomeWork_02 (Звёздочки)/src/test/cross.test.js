const cross = require('../cross');

describe('cross', () => {

    test('test', () => {
        expect(true).toBe(true);
    });

    test('draw cross', () => {
        expect(cross())
            .toEqual(
                ' *                 * \n' +
                '    *           *    \n' +
                '       *     *       \n' +
                '          *          \n' +
                '       *     *       \n' +
                '    *           *    \n' +
                ' *                 * \n');
    });

})