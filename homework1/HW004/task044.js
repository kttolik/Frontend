function stringNum(numStr) {
    const first = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    const ten = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    const remain = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

    let numArr = numStr.split(' ');
    let number = '';
    let n1;
    let n2;
    let n3;
    let result = '';

    if (numArr.length === 1) {
        n1 = first.indexOf(numArr[0]);
        result = n1;

        if (n1 === -1) {
            n1 = ten.indexOf(numArr[0]);
            result = n1 * 10;

            if (n1 === -1) {
                n1 = remain.indexOf(numArr[0]);
                result = n1 * 100;

            }
        }
        return result;
    }

    if (numArr.length === 2) {
        n2 = remain.indexOf((numArr[0]));
        n1 = ten.indexOf(numArr[1]);
        result = n2 * 100 + n1 * 10;

        if (n1 === -1) {
            n2 = remain.indexOf((numArr[0]));
            n1 = first.indexOf(numArr[1]);
            result = n2 * 100 + n1;
        }

        if (n2 === -1) {
            n2 = ten.indexOf((numArr[0]));
            result = n2 * 10 + n1;
        }

        return result;
    }

    if (numArr.length === 3) {
        n3 = remain.indexOf(numArr[0])
        n2 = ten.indexOf((numArr[1]));
        n1 = first.indexOf(numArr[2]);
        result = n3 * 100 + n2 * 10 + n1;
        return result;
    }
}

module.exports =  stringNum;