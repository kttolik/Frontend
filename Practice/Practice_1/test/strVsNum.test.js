const strVsNum = require('../strVsNum');

describe('strVsNum', () => {
    test('strVsNum', () => {
        expect(strVsNum('5', 15)).toBe(-10);
    })

    test('strVsNum', () => {
    expect(strVsNum('5', 8)).toEqual('false');
    })

    test('strVsNum', () => {
        expect(strVsNum('6', '8')).toBe('false');
    })

    test('strVsNum', () => {
        expect(strVsNum('qw', 'we')).toBe('false');
    })

})