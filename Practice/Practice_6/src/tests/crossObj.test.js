const crossObj = require('../crossObj');
describe('finds intersections of objects superficially and returns an intersection object', () => {
    test('crossObj', () => {
        expect(crossObj({ a: 1, b: 2 }, { c: 1, b: 2 })).toStrictEqual({ b: 2 });
    })

    test('crossObj', () => {
        expect(crossObj(null, { c: 1, b: 2 })).toBe(false);
    })

    test('crossObj', () => {
        expect(crossObj({ a: 1, b: 2 },  2)).toBe(false);
    })
})