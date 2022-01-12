/*

// task_1
function tickets(cost) {
    while (cost.length > 0) {
        if (cost[0] === cost[1]) {
            tickets(cost[+1])
            return 'Yes'
        }
        return 'No'
    }
}

// console.log(tickets([25, 50, 100]))
// console.log(tickets([25, 25, 50]))
// console.log(tickets([50, 25, 50]))
// console.log(tickets([100, 50, 25]))
// console.log(tickets([25, 100]))
// console.log(tickets([100]))
// console.log(tickets([25, 25, 50, 100]))

*/

// task_2 Напишите функцию, которая получает два бесконечных числа в
// виде строк. Вы должны вернуть результат суммы этих двух чисел
// в виде строки. Математическая работа с этими двумя числами
// недоступна. Не используйте BigInt.

/*
function getSum(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        return false;
    }

    let newObj = {
       first: Number(str1),
        second: Number(str2)
    }
    let answ = (newObj.first + newObj.second).toString();
    return  answ;
}


// console.log(getSum('111111111111111111111111111', '23333333333333333333333333333333333333'))
*/


// task_3
// task_4