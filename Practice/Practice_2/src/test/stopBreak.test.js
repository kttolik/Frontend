const stopBreak = require('../stopBreak');
describe('stopBreak', () => {
    test('stopBreak', () => {
        expect (stopBreak()).toStrictEqual([15, 14]);
    })
})