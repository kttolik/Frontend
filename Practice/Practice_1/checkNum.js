//4. Создайте функцию, которая проверяет число на соответствие трем
// различным требованиям:
// - число простое
// - число четное
// - число кратно 10
// Каждый должен возвращать истину или ложь, которые должны
// быть представлены в виде массива.
//

function checkNum(bzu) {
    let arrShow = [];
    let first;
    let second;
    let third;

    if (bzu % 2 == 0) {
        first = false;
    } else {
        first = true;
    }

    if (bzu < 0) {
        second = true;
    }
    for (let i = 2; i < bzu; i++)
        if (bzu % i === 0) {
            second = false;
        } else {
            second = true;
        }


    if (bzu % 10 === 0) {
        third = true;
    } else {
        third = false;
    }
    arrShow.push(first, second, third);
    return arrShow;
}

module.exports = checkNum;