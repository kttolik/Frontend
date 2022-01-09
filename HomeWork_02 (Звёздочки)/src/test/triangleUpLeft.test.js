const triangleUpLeft = require('../triangleUpLeft');

describe('triangleUpLeft', () => {

    test('test', () => {
        expect(true).toBe(true);
    })

    test('draw triangle in the upper left corner', () => {
        expect(triangleUpLeft())
            .toEqual(' *  *  *  *  *  *  * \n' +
                ' *              *    \n' +
                ' *           *       \n' +
                ' *        *          \n' +
                ' *     *             \n' +
                ' *  *                \n' +
                ' *                   \n');
    });

});