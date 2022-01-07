const maxItFunk = require('../task032');

describe('Find the maximum element of an array', () => {
    test('maxItFunk', () => {
        expect(maxItFunk([22, 11, 5, 3])).toBe(22);
    })

    test('minItFunk', () => {
        expect(maxItFunk([22, -11, -5, -3])).toBe(22);
    })
    test('minItFunk', () => {
        expect(maxItFunk([22, -11, 5, 0])).toBe(22);
    })
})