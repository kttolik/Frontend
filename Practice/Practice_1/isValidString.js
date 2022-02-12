function isSymbol(char) {
    return ',.!:-_? '.includes(char)

}

function checkSymbols(str) {
    return [',', '.', '!', ':', '-', '_', '?', ' '].some((symbol) => str.includes(symbol));

}

function isValidString(str) {
    if (str || typeof str === 'string') {
        if (str.length >= 2 && str.length <= 20 && checkSymbols(str) && (!isSymbol(str[0]) || str[0] === str[0].toUpperCase())) {
            return 'VALID';
        } else {

            return 'INVALID';
            
        }
    }

    return 'incorrect input data';
}


module.exports = { isValidString,  isSymbol, checkSymbols };


console.log(isValidString('Ar!123'))