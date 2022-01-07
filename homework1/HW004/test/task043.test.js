const numString = require('../task043');

describe('Enter the number 0-999, we get the string', () => {
    test('numString', () => {
        expect(numString(10)).toBe(' десять');
    })

    test('numString', () => {
        expect(numString(1)).toBe(' один');
    })
    test('numString', () => {
        expect(numString(11)).toBe(' одиннадцать');
    })

    test('numString', () => {
        expect(numString(20)).toBe(' двадцать');
    })
    test('numString', () => {
        expect(numString(100)).toBe(' сто');
    })

    test('numString', () => {
        expect(numString(200)).toBe(' двести');
    })

    test('numString', () => {
        expect(numString(300)).toBe(' триста');
    })
    test('numString', () => {
        expect(numString(400)).toBe(' четыреста');
    })
    test('numString', () => {
        expect(numString(500)).toBe(' пятьсот');
    })
    test('numString', () => {
        expect(numString(600)).toBe(' шестьсот');
    })
    test('numString', () => {
        expect(numString(700)).toBe(' семьсот');
    })
    test('numString', () => {
        expect(numString(800)).toBe(' восемьсот');
    })
    test('numString', () => {
        expect(numString(900)).toBe(' девятьсот');
    })
    test('numString', () => {
        expect(numString(0)).toBe('Неправильное значение, введи число!');
    })
    test('numString', () => {
        expect(numString(222)).toBe(' двести двадцать два');
    })
    test('numString', () => {
        expect(numString(999)).toBe(' девятьсот девяносто девять');
    })

})