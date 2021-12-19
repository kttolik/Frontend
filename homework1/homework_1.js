//1.	Если а – четное посчитать а*б, иначе а+б
//
// let a = +prompt("введи число" );
// let b = 12;
// if (a%2 == 0){
// a = a*b;
// } else {
// a = a + b;}
// alert(a);


// 2.	Определить какой четверти принадлежит точка с координатами (х,у)
/*function axi1s(x,y) {
    x = +prompt(`введи x`, `` );
    y = +prompt(`введи y`, `` );
    if (x > 0 && y > 0) {
        alert (`first quarter`);
    } else if (x < 0 && y > 0) {
        alert (`second quarter`);
    } else if (x < 0 && y < 0) {
        alert (`third quarter`);
    } else if (x > 0 && y < 0) {
        alert (`fourth quarter`);
    } else {
        alert (`Значения не найдены`);
    }
}
/*
 */
// 3.	Найти суммы только положительных из трех чисел
/*
let i = +prompt(`введи первое значение`, `` );
let a = +prompt(`введи второе значение`, `` );
let b = +prompt(`введи третье значение`, `` );
if (a > 0 && b > 0 && i > 0) {
    alert (a + b + i);
} else if (a < 0 && b > 0 && i > 0) {
    alert (b + i);
} else if (a > 0 && b < 0 && i > 0) {
    alert (a + i);
}  else if (a > 0 && b > 0 && i < 0) {
    alert (a + b);
}  else {
    alert ('нет суммы');
}
*/

/*4.	Посчитать выражение (макс(а*б*с, а+б+с))+3
let a = +prompt("Введите a", "");
let b = +prompt("Введите b", "");
let c = +prompt("Введите c", "");
if (a <= 1 || b <= 1 || c <= 1) {
    alert("Не корректное число")
} else {
    let numbers_1 = a * b * c;
    let numbers_2 = a + b + c;
    let numMax;
    if (numbers_1 > numbers_2) {
        numMax = numbers_1 + 3;
        alert(numMax);
    } else {
        numMax = numbers_2 + 3;
        alert(numMax);
    }
}*/



// 5.	Написать программу определения оценки студента по его рейтингу, на основе следующих правил

// let r = +prompt("Введите ваш рейтинг", "");
// if (r > 0 && r <= 19) {
//         alert ("score F");
//     } else if (r > 19 && r <= 39) {
//         alert ("score E");
//     } else if (r >= 40 && r <= 59) {
//         alert ("score D");
//     } else if (r >= 60 && r <= 74) {
//         alert ("score C");
//     } else if (r >= 75 && r <= 89) {
//         alert ("score B");
//     } else if (r > 89) {
//         alert ("score A");
//     } else if (r == " " || r == null) {
//     alert ("error");
// }


