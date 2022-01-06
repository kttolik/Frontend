const yousRating = require('../task05');

describe('Determine which quarter the point with coordinates (x, y) belongs to', () => {
    test('yousRating', () => {
        expect(yousRating('')).toEqual('error');
    })
    test('yousRating', () => {
        expect(yousRating(0)).toEqual('error');
    })

    test('axiLs', () => {
        expect(yousRating(15)).toEqual('score F');
    })

    test('yousRating', () => {
        expect(yousRating(21)).toEqual('score E');
    })

    test('yousRating', () => {
        expect(yousRating(45)).toEqual('score D');
    })
    test('yousRating', () => {
        expect(yousRating(64)).toEqual('score C');
    })

    test('yousRating', () => {
        expect(yousRating(80)).toEqual('score B');
    })
    test('yousRating', () => {
        expect(yousRating(90)).toEqual('score A');
    })
})