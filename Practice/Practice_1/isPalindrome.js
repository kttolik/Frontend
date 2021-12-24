// 1) Написать функцию, которая проверяет является ли строка
// палиндромом;
function isPalindrome(str) {
    let strLen = str.length;
    let result = '';
    for (let i = 0; i < strLen; i++) {
        if (str[i] === str[strLen - 1 - i]) {
            result = true;
        } else {
            result = false;
            return result;
        }
    }
    return result;
}


module.exports = isPalindrome;