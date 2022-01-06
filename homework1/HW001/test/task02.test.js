const axiLs = require('../task02');

describe('Determine which quarter the point with coordinates (x, y) belongs to', () => {
    test('axiLs', () => {
        expect(axiLs(2, 4)).toEqual(`first quarter`);
    })

    test('axiLs', () => {
        expect(axiLs(-1, 5)).toEqual(`second quarter`);
    })

    test('axiLs', () => {
        expect(axiLs(-11, -23)).toEqual(`third quarter`);
    })

    test('axiLs', () => {
        expect(axiLs(13, -6)).toEqual(`fourth quarter`);
    })
    test('axiLs', () => {
        expect(axiLs(0, 0)).toEqual(`Значения не найдены`);
    })
})