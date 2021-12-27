const emptyTriLowRight = require('../emptyTriLowRight');

describe('emptyTriLowRight', () => {

    test('test', () => {
        expect(true).toBe(true);
    });

    test('draw empty triangle in the lower right corner', () => {
        expect(emptyTriLowRight())
            .toEqual('                   * \n' +
                '                *  * \n' +
                '             *     * \n' +
                '          *        * \n' +
                '       *           * \n' +
                '    *              * \n' +
                ' *  *  *  *  *  *  * \n');
    });
})