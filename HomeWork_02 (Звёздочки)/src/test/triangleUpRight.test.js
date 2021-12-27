const triangleUpRight = require('../triangleUpRight');

describe('triangleUpRight', () => {

    test('test', () => {
        expect(true).toBe(true);
    });

    test('draw triangle in the upper right corner', () => {
        expect(triangleUpRight())
            .toEqual(' *  *  *  *  *  *  * \n' +
                '    *              * \n' +
                '       *           * \n' +
                '          *        * \n' +
                '             *     * \n' +
                '                *  * \n' +
                '                   * \n');
    });

})