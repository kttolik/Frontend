const stringNum = require('../task044');

describe('Enter the number 0-999, we get the string', () => {
    test('stringNum', () => {
        expect(stringNum('десять')).toBe(10);
    })

    test('stringNum', () => {
        expect(stringNum('один')).toBe(1);
    })
    test('stringNum', () => {
        expect(stringNum('одиннадцать')).toBe(11);
    })

    test('stringNum', () => {
        expect(stringNum('двадцать')).toBe(20);
    })
    test('stringNum', () => {
        expect(stringNum('сто')).toBe(100);
    })

    test('stringNum', () => {
        expect(stringNum('двести')).toBe(200);
    })

    test('stringNumn', () => {
        expect(stringNum('триста')).toBe(300);
    })
    test('stringNum', () => {
        expect(stringNum('четыреста')).toBe(400);
    })
    test('stringNum', () => {
        expect(stringNum('пятьсот')).toBe(500);
    })
    test('stringNum', () => {
        expect(stringNum('шестьсот')).toBe(600);
    })
    test('stringNum', () => {
        expect(stringNum('семьсот')).toBe(700);
    })
    test('stringNum', () => {
        expect(stringNum('восемьсот')).toBe(800);
    })
    test('stringNum', () => {
        expect(stringNum('девятьсот')).toBe(900);
    })
    test('stringNum', () => {
        expect(stringNum('ноль')).toBe(0);
    })
    test('stringNum', () => {
        expect(stringNum('двести двадцать два')).toBe(222);
    })
    test('stringNum', () => {
        expect(stringNum('девятьсот девяносто девять')).toBe(999);
    })

})