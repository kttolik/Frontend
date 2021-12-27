const filledSq = require('../filledSq');

describe('filledSq', () => {

    test('test', () => {
        expect(true).toBe(true);
    });

    test('draw filled square', () => {
        expect(filledSq())
            .toEqual(' *  *  *  *  *  *  * \n' +
                ' *  *  *  *  *  *  * \n' +
                ' *  *  *  *  *  *  * \n' +
                ' *  *  *  *  *  *  * \n' +
                ' *  *  *  *  *  *  * \n' +
                ' *  *  *  *  *  *  * \n' +
                ' *  *  *  *  *  *  * \n');
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
})