const deepEqual = require('../deepEqual');
describe('function makes deep comparison of objects', () => {
    test('deepEqual', () => {
        expect(deepEqual({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } })).toBe(true);
    })

    test('deepEqual', () => {
        expect(deepEqual(null, { a: 1, b: { c: 1 } })).toBe(false);
    })

    test('deepEqual', () => {
        expect(deepEqual({ a: 1, b: { c: 1 } },  2)).toBe(false);
    })
})