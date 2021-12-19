// 1.	Найти сумму четных чисел и их количество в диапазоне от 1 до 99
/*let counterNumber = (99 - 1) / 2;
let   sumCounterNumber =  counterNumber * (1 + 99)/2;
console.log(sumCounterNumber)*/

/*2.	Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

function numberPrime(zu) {
let z = 2;
if (zu%z === 0) {
    alert('нет');
} else {
    alert('да');
}
}*/

// function inumberPrim(zu) {
//     for(let i = 2; i < zu; i++)
//         if(zu % i === 0) {
//             return false;
//         }
//           return zu > 1;
// }

// 3.	Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
//
// последовательный подбор

/*function SqRtSeq(sqr)
{
    for (let i=1; ; i++ )
    {
        let q = i * i;
        if (sqr === q)
            return i;
        if (sqr < q)
            return i-1;
    }
}*/

// бинарный поиск
/*function SqRtBinary(sqr)
{
    let min = 1;
    let max = sqr;
    let pr = 0;
    for (;;)
    {
        let center = (min + max) / 2;
        if (pr == center)
            return center;
        let q = center * center;
        if (sqr == q)
            return center;
        if (sqr < q)
            max = center;
        else
            min = center;
        pr = center;
    }
}*/
// 4.	Вычислить факториал числа n. n! = 1*2*…*n-1*n;

// function factorial(n){
//     let result = 1;
//     while(n){
//         result = result * n--;
//     }
//     return result;
// }


// 5.	Посчитать сумму цифр заданного числа

// function sumDigits(numberSum) {
//      let sum = 0;
//     for( let numSet of `${numberSum}` ){
//         sum = sum + (+numSet);
//     }
//     return sum;
// }


// 6.	Вывести число, которое является зеркальным
// отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.
/*
let n = prompt('введи число!', '');
let numberRev = n[n.length -1];
for(let i = n.length - 2; i >= 0; i--)
    numberRev = numberRev + n[i];
  alert(numberRev);*/
