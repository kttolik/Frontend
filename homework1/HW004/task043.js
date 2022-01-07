function numString(num) {
    const first = [' ноль', ' один', ' два', ' три', ' четыре', ' пять', ' шесть', ' семь', ' восемь', ' девять'];
    const gap = [' десять', ' одиннадцать', ' двенадцать', ' тринадцать', ' четырнадцать', ' пятнадцать', ' шестнадцать', ' семнадцать', ' восемнадцать', ' девятнадцать'];
    const ten = ['', '', ' двадцать', ' тридцать', ' сорок', ' пятьдесят', ' шестьдесят', ' семьдесят', ' восемьдесят', ' девяносто'];
    const hundred = ['', ' сто', ' двести', ' триста', ' четыреста', ' пятьсот', ' шестьсот', ' семьсот', ' восемьсот', ' девятьсот'];

    if (!num) {
        return 'Неправильное значение, введи число!';
    }

    let nts = num.toString().split('');
    let nSl = nts.length;
    let intr;
    let result = '';

    if (nSl === 1) {
        intr = num;
        result = first[intr];
        return result;
    }

    if (num < 20) {
        intr = num - 10;
        result = gap[intr];
    }

    if (num % 10 === 0 && num < 100 && num !== 10) {
        intr = num / 10;
        result = ten[intr];
    }

    if (num >= 100 && num % 100 === 0) {
        intr = num / 100;
        result = hundred[intr];
    }

    if (num > 20 && num < 100) {
        result += ten[nts[0]] + first[nts[1]];

    }

    if (num > 100 && num < 1000 && num % 10 !== 0) {
        result += hundred[nts[0]] + ten[nts[1]] + first[nts[2]];
    }

    return result;
}

module.exports = numString;