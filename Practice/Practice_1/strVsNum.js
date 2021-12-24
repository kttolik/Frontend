function strVsNum(str, num) {
    let sumNumStr = 0;

    if (num % 3 === 0 && num % 5 === 0 && num % 15 === 0) {
        num = num * -1;
        sumNumStr = +str + num;
    } else {
        sumNumStr = 'false';
    }

    return sumNumStr;
}

module.exports = strVsNum;
