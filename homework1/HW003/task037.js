function showOddNum(arr) {
    let oddNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddNum++;
        }
    }
    return ('number of odd numbers ' + oddNum);
}

module.exports = showOddNum;
