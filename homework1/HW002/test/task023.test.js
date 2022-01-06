const SqRtSeq = require('../task023');

describe('Find the root of a natural number up to an integer. Consistent selection', () => {
    test('SqRtSeq', () => {
        expect(SqRtSeq(14)).toBe(3);
    })

    test('SqRtSeq', () => {
        expect(SqRtSeq(7)).toBe(2);
    })
    test('SqRtSeq', () => {
        expect(SqRtSeq(0)).toBe(0);
    })

})
