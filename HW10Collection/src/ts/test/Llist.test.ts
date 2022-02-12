const { LList } = require('../LList')


describe('clear', () => {
    test('Array should be empty', () => {
        expect((() => {
            const testList = new LList([1, 2, 3]);
            testList.clear();
            return testList.toArray()})()).toEqual([])
    })
});


describe('getSize', () => {
    test('Size is 0', () => {
        const testList = new LList([]);
        expect(testList.getSize()).toBe(0)
    })

    test('Size is 3', () => {
        const testList = new LList([1, 2, 3]);
        expect(testList.getSize()).toBe(3)
    })
});


describe('add', () => {
    test('Should add number', () => {
        expect((() => {
            const testList = new LList([]);
            testList.add(21);
            return testList.toArray()})()).toEqual([21])
    })
});


describe('set', function () {
    test('Object value can be overwritten', () => {
            expect((() => {
                const testList = new LList([1, 2, 3]);
                testList.set(4, 0);
                return testList.toArray()})()).toEqual([4,2,3])
        }
    )
    test('Object value cannot be overwritten', () => {
            expect((() => {
                const testList = new LList([1, 2, 3]);
                testList.set(4, 5);
                return testList.toArray()})()).toEqual([1,2,3])
        }
    )
});


describe('get', () => {
    test('Get element with index 1', () => {
        const testList = new LList([1, 2, 3]);
        expect(testList.get(0)).toEqual(1)
    })
});


describe('remove', () => {
    test('Return removed elememt', () => {
        const testList = new LList([1, 2, 3]);
        expect(testList.remove(1)).toEqual(1)
    })
});


describe('toArray', () => {
    test('Return array', () => {
        const testList = new LList([1, 2, 3]);
        expect(testList.toArray()).toEqual([1,2,3])
    })
})


describe('toString', () => {
    test('Return string', () => {
        const testList = new LList([11, 31, 43]);
        expect(testList.toString()).toBe('11 31 43')
    })
});

describe('contains', () => {
    test('Contains element', () => {
        const testList = new LList([1, 2, 3]);
        expect(testList.contains(1)).toBe(true)
    })
    test('Does not contain an element', () => {
        const testList = new LList([1, 2, 3]);
        expect(testList.contains(5)).toBe(false)
    })
})

describe('minValue', () => {
    test('Return min value', () => {
        const testList = new LList([-23, 0, 4, 17]);
        expect(testList.minValue()).toBe(-23)
    })
})

describe('maxValue', () => {
    test('Return max value', () => {
        const testList = new LList([-23, 0, 4, 17]);
        expect(testList.maxValue()).toBe(17)
    })
})


describe('minIndex', () => {
    test('Return index of min element', () => {
        const testList = new LList([-23, 0, 4, 17]);
        expect(testList.minIndex()).toBe(0)
    })
})

describe('maxIndex', () => {
    test('Return index of max element', () => {
        const testList = new LList([-23, 0, 4, 17]);
        expect(testList.maxIndex()).toBe(3)
    })
})

describe('reverse', () => {
    test('Return reverse array', () => {
        const testList = new LList([1,2,3])
        expect((() => {
            testList.reverse()
            return testList.toArray()})()).toEqual([3,2,1])
    })
})

describe('sort', () => {
    test('Return sortes array', () => {
        const testList = new LList([23, 0, -4, 17);
        expect((() => {
            testList.sort()
            return testList.toArray()
        })()).toEqual([-4, 0, 17, 23])
    })
})


describe('halfReverse', () => {
    test('Return halfReverse array', () => {
        const testList = new LList([1, 2, 3, 4, 5, 6, 7])
        expect((() => {
            testList.halfReverse()
            return testList.toArray()
        })()).toEqual([5, 6, 7, 4, 1, 2, 3])
    })
})

describe('retainAll', () => {
    test('Retain num', () => {
        const testList = new LList([1, 2, 3, 4, 5]);
        expect((() => {
            testList.retainAll([1, 5, 8]);
            return testList.toArray()
        })()).toEqual([1, 5])
    })
})

describe('removeAll', () => {
    test('Remove num', () => {
        const testList = new LList([1, 2, 3, 4])
        expect((() => {
            testList.removeAll([1, 2, 3])
            return testList.toArray()
        })()).toEqual([4])
    })
})