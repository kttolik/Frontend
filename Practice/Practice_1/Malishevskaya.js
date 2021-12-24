// 1) Написать функцию, которая проверяет является ли строка
// палиндромом;

/*function isPalindrome(str) {
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

isPalindrome('sagas');*/



// 2. Написать функцию, которая принимает аргумент и валидирует его по правилам


/*
   function strValid(str) {
    let val = 0;
    if (str.length < 2 && str.length > 20) {
        val = 'INVALID';
    }
       if (str == Number) {
           return 'incorrect input data';
        } // не выводит(((
        if (str.includes(',') || str.includes('!') || str.includes(':') ||
            str.includes('-') || str.includes('?') || str.includes('.') ||
            str.includes(' ')) {
            val = 'VALID';
        } else {
            val = 'INVALID';
        }

        if (str[0] !== str[0].toUpperCase() || str[0] === ',' || str[0] === '!' || str[0] === ':'
        || str[0] === '-' || str[0] === '?' ||  str[0] === '.' ||  str[0] === ' ')  {
            val = 'INVALID';
        } else {
          val = 'VALID';
        }
        return val;
        }

        console.log(strValid('!a'))
        console.log(strValid('a!esd'))
console.log(strValid(11))
*/


// 3) Создайте функцию, которая принимает два аргумента: число,
// представленное в виде строки, и число. Если аргумент типа number
// делится на 3, 5 и 15 без остатка - умножьте его на -1. Функция должна
// возвращать числовую сумму двух аргументов.

/*
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
*/
    //проверка strVsNum('5', 30)


//4. Создайте функцию, которая проверяет число на соответствие трем
// различным требованиям:
// - число простое
// - число четное
// - число кратно 10
// Каждый должен возвращать истину или ложь, которые должны
// быть представлены в виде массива.
//

/*
function checkNum(bzu) {
    let arrShow = [];
    let firstСheck;
    let secondСheck;
    let thirdСheck;

    if (bzu % 2 == 0) {
        firstСheck = false;
    } else {
        firstСheck = true;
    }

    if (bzu < 0) {
        secondСheck = true;
    }
    for (let i = 2; i < bzu; i++)
        if (bzu % i === 0) {
            secondСheck = false;
        } else {
            secondСheck = true;
        }

    if (bzu % 10 === 0) {
        thirdСheck = true;
    } else {
        thirdСheck = false;
    }
    arrShow.push(firstСheck, secondСheck, thirdСheck);
    return arrShow;
}
*/



