const calcExp = require('../task04');

describe('Calculate the expression (max (a * b * c, a + b + c)) + 3', () => {
    test('calcExp', () => {
        expect(calcExp(2, 1, 3)).toBe(9);
    })

    test('calcExp', () => {
        expect(calcExp(1, 1, 1)).toBe(6);
    })

    test('calcExp', () => {
        expect(calcExp(-1, -1, -1)).toBe('Не корректное число');
    })
})