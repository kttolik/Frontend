const distBetween = require('../task042');

describe('distance between two points in two-dimensional cartesian space', () => {
    test('distBetween', () => {
        expect(distBetween(1,12,-5, -2)).toBe(15.231546211727817);
    })
    test('distBetween', () => {
        expect(distBetween(0,12,-5, 0)).toBe(13);
    })

})