// 1.	Получить строковое название дня недели по номеру дня.
/*
let fist = +prompt('Введи номер дня недели', '');
if (fist == 1) {
    alert ('Понедельник!');
} else if (fist == 2) {
    alert ('Вторник!');
} else if (fist == 3) {
    alert ('Среда!');
} else if (fist == 4) {
    alert ('Четверг!');
} else if (fist == 5) {
    alert ('Пятница!');
} else if (fist == 6) {
    alert ('Суббота!');
} else if (fist == 7) {
    alert ('Воскресенье!');
} else {
    alert ('Некорректное число!');
}
*/

// 2.	Найти расстояние между двумя точками в двухмерном декартовом пространстве.

// function distBetween(x1, y1, x2, y2)
// {
//     let answ = ((x2 - x1) ** 2 + (y2 - y1) ** 2 ) ** 0.5;
//     return answ;
// }


// 3.	Вводим число(0-999), получаем строку с прописью числа.

/*
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

    if (num % 10 === 0 && num < 100 && num != 10) {
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

console.log(numString(999));
/*


 */

// 4.	Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число

/*
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

console.log( stringNum('триста двадцать пять'));
*/

