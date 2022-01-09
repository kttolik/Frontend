function getNumber(array) {

    let newArray = [];
    let oneMoreArray = [];

    if (typeof array !== 'object' || array == 0 || array == '') {
        return false;
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newArray.push(array[i]);
        } else {
            oneMoreArray.push(array[i]);
        }
    }
    if (newArray.length < oneMoreArray.length) {
        return newArray[0];
    } else {
        return oneMoreArray[0];
    }
}

module.exports = getNumber;