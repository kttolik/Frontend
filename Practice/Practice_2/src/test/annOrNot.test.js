const annOrNot = require('../annOrNot');

describe('annOrNot', () => {
    test('annOrNot', () => {
        expect(annOrNot('приказ', 'каприз')).toEqual(true);
    })

    test('annOrNot', () => {
        expect(annOrNot('приказ', 'наказ')).toEqual(false);
    })

    test('annOrNot', () => {
        expect(annOrNot('12', '21')).toEqual(true);
    })
})