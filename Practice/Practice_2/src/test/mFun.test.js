const mFun = require('../mFun');
describe('mFun', () => {
    test('mFun', () => {
        expect (mFun(15)).toBe('12three 4five three 78three five 11three 1314threeFive ');
    })

    test('mFun', () => {
        expect(mFun(9)).toBe('12three 4five three 78three ');
    })

    test('mFun', () => {
     expect(mFun(10)).toBe('12three 4five three 78three five ');
    })

    test('mFun', () => {
        expect(mFun(4)).toBe('12three 4');
    })

    test('mFun', () => {
        expect(mFun(1)).toBe('1');
    })
})