function arrChange(array) {
    if (!Array.isArray(array)) {
        return false;
    }
    let arResult = [];

    for (let num of array) {
        if (!arResult.includes(num)) {
            arResult.push(num);
        }
    }
    return arResult;
}

module.exports =  arrChange;