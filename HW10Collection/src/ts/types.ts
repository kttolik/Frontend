export interface IList {
clear:() => void
    add: (item) => void
    getSize: () => number
    set: (item, idx) => void
    get: (idx) => void
    remove: (item) => void
    toArray: () => number[]
    toString: () => string
    contains: (item) => boolean
    minValue: () => number
    maxValue: () => number
    minIndex: () => number
    maxIndex: () => number
    revers: () => void
    helpRevers: () => void
    retainAll: (items: number[]) => void
    removeAll: (items: number[]) => void
    sort: () => void
    print: () => void
}

