//1.	Если а – четное посчитать а*б, иначе а+б
// function sumEven(a) {
//     let b = 12;
//     if (a % 2 == 0) {
//         a = a * b;
//     } else {
//         a = a + b;
//     }
//     return a;
// }
// console.log(sumEven(11))
// console.log(sumEven(12))


// 2.	Определить какой четверти принадлежит точка с координатами (х,у)
/*function axi1s(x, y) {
    if (x > 0 && y > 0) {
        return (`first quarter`);
    } else if (x < 0 && y > 0) {
        return (`second quarter`);
    } else if (x < 0 && y < 0) {
        return (`third quarter`);
    } else if (x > 0 && y < 0) {
        return (`fourth quarter`);
    } else {
        return (`Значения не найдены`);
    }
}
console.log(axi1s(12, -5));
console.log(axi1s(-2, 4));
*/

// 3.	Найти суммы только положительных из трех чисел

/*
function positiveNum(i, a, b) {

    if (a > 0 && b > 0 && i > 0) {
        return (a + b + i);
    } else if (a < 0 && b > 0 && i > 0) {
        return (b + i);
    } else if (a > 0 && b < 0 && i > 0) {
        return (a + i);
    } else if (a > 0 && b > 0 && i < 0) {
        return (a + b);
    } else {
        return ('нет суммы');
    }
}
console.log(positiveNum(2, 4, 10));
*/

// 4.	Посчитать выражение (макс(а*б*с, а+б+с))+3

/*
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

console.log(calcExp(2, 1, 3));
*/

// 5.	Написать программу определения оценки студента по его рейтингу, на основе следующих правил

/*
function yousRating (r) {
    if (r > 0 && r <= 19) {
        return ("score F");
    } else if (r > 19 && r <= 39) {
        return ("score E");
    } else if (r >= 40 && r <= 59) {
        return ("score D");
    } else if (r >= 60 && r <= 74) {
        return ("score C");
    } else if (r >= 75 && r <= 89) {
        return ("score B");
    } else if (r > 89) {
        return ("score A");
    } else if (r == " " || r == null) {
        return ("error");
    }
}


console.log(yousRating(19));
*/

