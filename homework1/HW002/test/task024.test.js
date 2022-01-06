const SqRtBinary = require('../task024');

describe('Find the root of a natural number up to an integer. Binary method', () => {
    test('SqRtBinary', () => {
        expect(SqRtBinary(11)).toBe(4);
    })

    test('SqRtBinary', () => {
        expect(SqRtBinary(7)).toBe(3);
    })
    test('SqRtSeq', () => {
        expect(SqRtBinary(0)).toBe(1);
    })
    test('SqRtSeq', () => {
        expect(SqRtBinary(-5)).toBe(1);
    })

})
