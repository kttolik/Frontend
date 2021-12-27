const emptySq = require('../emptySq');

describe('emptySq', () => {

    test('test', () => {
        expect(true).toBe(true);
    });

    test('draw empty square', () => {
        expect(emptySq())
            .toEqual(' *  *  *  *  *  *  * \n' +
                ' *                 * \n' +
                ' *                 * \n' +
                ' *                 * \n' +
                ' *                 * \n' +
                ' *                 * \n' +
                ' *  *  *  *  *  *  * \n');
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
})