const  { isValidString, isSymbol, checkSymbols } = require('../isValidString');


describe('isSymbol', () => {
    test('isSymbol', () => {
        expect(false).toBe(false);
        expect(isSymbol('A')).toBe(false);
    })

    test('isSymbol', () => {
        expect(false).toBe(false);
        expect(isSymbol('aw')).toBe(false);
    })

    test('isSymbol', () => {
        expect(false).toBe(false);
        expect(isSymbol('212')).toBe(false);
    })
    test('isSymbol', () => {
        expect(true).toBe(true);
        expect(isSymbol('!')).toBe(true);
    })

    test('isSymbol', () => {
        expect(true).toBe(true);
        expect(isSymbol('.')).toBe(true);
    })

})

describe('checkSymbols', () => {
    test('checkSymbols', () => {
        expect(false).toBe(false);
        expect(checkSymbols('A')).toBe(false);
    })


    test('checkSymbols', () => {
        expect(false).toBe(false);
        expect(checkSymbols('23')).toBe(false);
    })

    test('checkSymbols', () => {
        expect(true).toBe(true);
        expect(checkSymbols('!')).toBe(true);
    })

})


describe('isValidString', () => {
    test('isValidString', () => {
        expect('VALID').toBe('VALID');
        expect(isValidString('A!esd')).toBe('VALID');
    })

    test('isValidString', () => {
        expect('INVALID').toBe('INVALID');
        expect(isValidString('tur')).toBe('INVALID');
    })

    test('tisValidString', () => {
        expect('INVALID').toBe('INVALID');
        expect(isValidString(11)).toBe('INVALID');
    })

    test('test', () => {
        expect('INVALID').toBe('INVALID');
        expect(isValidString('')).toBe('INVALID');
    })

    test('isValidString', () => {
        expect('INVALID').toBe('INVALID');
        expect(isValidString('a!esd')).toBe('INVALID');
    })

    test('isValidString', () => {
        expect('INVALID').toBe('INVALID');
        expect(isValidString('!a')).toBe('INVALID');
    })

    test('isValidString', () => {
        expect('INVALID').toBe('INVALID');
        expect(isValidString('a')).toBe('INVALID');
    })

    test('isValidString', () => {
        expect('INVALID').toBe('INVALID');
        expect(isValidString('E')).toBe('INVALID');
    })

    test('isValidString', () => {
        expect('incorrect input data').toBe('incorrect input data');
        expect(isValidString(NaN)).toBe('incorrect input data');
    })

})

