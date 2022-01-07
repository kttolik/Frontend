const dayWeek = require('../task041');

describe('Get string name of day of week by day number', () => {
    test('dayWeek', () => {
        expect(dayWeek(1)).toBe('Понедельник!');
    })
    test('dayWeek', () => {
        expect(dayWeek(2)).toBe('Вторник!');
    })
    test('dayWeek', () => {
        expect(dayWeek(3)).toBe('Среда!');
    })
    test('dayWeek', () => {
        expect(dayWeek(4)).toBe('Четверг!');
    })
    test('dayWeek', () => {
        expect(dayWeek(5)).toBe('Пятница!');
    })
    test('dayWeek', () => {
        expect(dayWeek(6)).toBe('Суббота!');
    })
    test('dayWeek', () => {
        expect(dayWeek(7)).toBe('Воскресенье!');
    })

    test('dayWeek', () => {
        expect(dayWeek(8)).toBe('Некорректное число!');
    })

})