const mFun = require('../mFun');
describe('mFun', () => {
    test('mFun', () => {
        expect(15).toBe('threeFive');
    })

    test('mFun', () => {
        expect(mFun(9)).toBe('three');
    })

    test('mFun', () => {
     expect(mFun(10)).toBe('five');
    })

})