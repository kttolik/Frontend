function calcExp(a, b, c) {
    if (a < 1 || b < 1 || c < 1) {
        return ("Не корректное число")
    } else {
        let numbers_1 = a * b * c;
        let numbers_2 = a + b + c;
        let numMax;
        if (numbers_1 > numbers_2) {
            numMax = numbers_1 + 3;
            return (numMax);
        } else {
            numMax = numbers_2 + 3;
            return (numMax);
        }
    }
}

module.exports = calcExp;
