const emptyTriLowLeft = require('../emptyTriLowLeft');

describe('emptyTriLowLeft', () => {

    test('test', () => {
        expect(true).toBe(true);
    });

    test('draw empty triangle in the lower left corner', () => {
        expect(emptyTriLowLeft())
            .toEqual(' *                   \n' +
                ' *  *                \n' +
                ' *     *             \n' +
                ' *        *          \n' +
                ' *           *       \n' +
                ' *              *    \n' +
                ' *  *  *  *  *  *  * \n');
    });

})