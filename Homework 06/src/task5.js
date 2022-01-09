function getNextPalindrome(number) {
    if(typeof number !== 'number') {
        return false;
    }

    let num = number + 1;

    if (number < 11) {
        num = 11;
    }

    while (num.toString().split('').reverse().join('') !== num.toString()) {
        num++
    }

    return num;
}
module.exports = getNextPalindrome;