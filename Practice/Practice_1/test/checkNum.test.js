const checkNum = require('../checkNum.js');

describe('checkNum', () => {

      test('checkNum', () => {
        expect([ true, true, false ]).toStrictEqual([ true, true, false ]);
        expect(checkNum(3)).toEqual([ true, true, false ]);
    })

    test('checkNum', () => {
        expect([ false, true, true ]).toStrictEqual([ false, true, true ]);
        expect(checkNum(20)).toEqual([ false, true, true ]);
    })

    test('checkNum', () => {
        expect(checkNum('qwe')).toEqual([ true, undefined, false ]);
    })

})