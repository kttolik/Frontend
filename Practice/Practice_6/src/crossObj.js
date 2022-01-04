function crossObj(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }

    let crossObjResult = {};
    let keysInObj1 = Object.keys(obj1);

    for (let i = 0; i < keysInObj1.length; i++) {
        if (obj1[keysInObj1[i]] === obj2[keysInObj1[i]]) {
            crossObjResult[keysInObj1[i]] = obj1[keysInObj1[i]];
        }
    }

    return crossObjResult;
}

module.exports = crossObj;

console.log(crossObj({ a: 1, b: 2 }, { c: 1, b: 2 }))
