function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;

    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }

    let propsInObj1 = 0, propsInObj2 = 0;

    for (let prop in obj1)
        propsInObj1 = propsInObj1 + 1;

    for (let prop in obj2) {
        propsInObj2 = propsInObj2 + 1;
        if (!(prop in obj1) || !deepEqual(obj1[prop], obj2[prop]))
            return false;
    }

    return propsInObj1 == propsInObj2;
}

module.exports = deepEqual;

