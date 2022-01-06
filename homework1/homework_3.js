// 1.	Найти минимальный элемент массива
   /*function minItFunk(arrMinItem) {
    let minItem = arrMinItem[0]; // Первый элемент принимаем за минимальный.
    for(let i = 0; i < arrMinItem.length; i++) {
    if (arrMinItem[i] < minItem) {
    minItem = arrMinItem[i];
    }
    }
    alert(minItem + ' минимум')
    }*/
// проверка someArr = [22, 11, 5, -1];
//            minItFunk(someArr)



// 2.	Найти максимальный элемент массива
    /*
    function maxItFunk(arrMaxItem) {
      let maxItem = arrMaxItem[0]; // Первый элемент принимаем за минимальный.
    for(let i = 0; i < arrMaxItem.length; i++) {
    if (arrMaxItem[i] > maxItem)
    { maxItem = arrMaxItem[i];
    }
    }
    return(maxItem + ' максимум')
    }
    */
// проверка oneMoreArr = [22, 11, 5, -1];
//            maxItFunk(oneMoreArr)


// 3.	Найти индекс минимального элемента массива
// Заполнение массива
    /*let arrMinItem = [-13, 12, 2, 1];
    let minItem = 0;
    for(let i = 0; i < arrMinItem.length; i++) {
    if (arrMinItem[i] < minItem)
    { minItem = arrMinItem[i];
    minItemIndex = [i];
    }
    }
    console.log(minItemIndex)*/

/*  function showMinItem(arrMinItem) {
    let minItem = 0;
    for (let i = 0; i < arrMinItem.length; i++) {
    if (arrMinItem[i] < minItem) {
    minItem = arrMinItem[i];
    minItemIndex = [i];
    }
    }
    console.log(minItemIndex)
    }
    */


// 4.	Найти индекс максимального элемента массива
// Заполнение массива
  /*  let arrMaxItem = [13, -12, 2, 1];
    let maxItem = 0;
    for(let i = 0; i < arrMaxItem.length; i++) {
    if (arrMaxItem[i] > maxItem)
    { maxItem = arrMaxItem[i];
        maxItemIndex = [i];
    }
    }
   console.log(maxItemIndex)*/

// через функцию
    /*
    function showMaxItem(arrMaxItem) {
    let maxItem = 0;
    for(let i = 0; i < arrMaxItem.length; i++) {
    if (arrMaxItem[i] > maxItem)
    { maxItem = arrMaxItem[i];
    maxItemIndex = [i];
    }
    }
    console.log(maxItemIndex)
    }
    */

// 5.	Посчитать сумму элементов массива с нечетными индексами

 /*   function showOddItemSum(mass1) {
        let sum = 0;
        let n = 0;
        for (let i = 0; i < mass1.length; i++) {
            if (mass1[i] % 2 != 0) {
                ++n
                sum += mass1[i];
            }
        }
        console.log("Сумма равна " + sum);
    }
*/


// 6.	Сделать реверс массива (массив в обратном направлении)
    /*
    function changeArr(arr) {
    for(let i = 0, j = arr.length-1; i < j; i++, j--) {
    let changeItems = arr[i];
    arr[i] = arr[j];
    arr[j] = changeItems;
    }
    return arr;
    }

    let arr = [];
    for (let i=0; i<5; i++) {
    arr[i] = +prompt('Введите любое число', +i);
    if(arr[i] === null || arr[i] == ' ') {
        alert('Отмена');
    }
    }
    changeArr(arr);
    alert(arr);
    */


// 7.	Посчитать количество нечетных элементов массива
    /*function showOddNum(arr) {
    let oddNum = 0;
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
            oddNum++;
    }
    }
    console.log("number of odd numbers " + oddNum);
    }*/
// let  numOfNum = [12, 33, 41, 55, 22];
// showOddNum(numOfNum)

// 8.	Поменять местами первую и вторую половину массива, например, для массива
// 1 2 3 4, результат 3 4 1 2
/*
const myArray = [1,2,3,4];
const lastElArray = myArray.pop();
const lastOfLast =  myArray.pop();
myArray.unshift(4, 3);
console.log(myArray);*/


// 9.	Отсортировать массив (пузырьком (Bubble):
/*function bubbleSort (array) {
    for (let n = 0; n < array.length; n++) {
        for (let i = 0; i < array.length - 1 - n; i++) {
            if (array[i] > array[i + 1]) {
                const bubbl = array[i]
                array[i] = array[i + 1]
                array[i + 1] = bubbl
            }
        }
    }
    return array
    }*/
// let arrNeedForSort = [-2,15,21,64,90,30,41,101,89,11];
// bubbleSort (arrNeedForSort)
// выбором (Select):
/*function selectionSort(inputArr) {
    let n = inputArr.length;

    for(let i = 0; i < n; i++) {
        // Находим наименьшее число в правой части массива
        let min = i;
        for(let j = i; j < n; j++) {
            if(inputArr[j] < inputArr[min]) {
                min=j;
            }
        }
        if (min != i) {
            // Заменяем элементы
            let tmp = inputArr[i];
            inputArr[i] = inputArr[min];
            inputArr[min] = tmp;
        }
    }
    return inputArr;
    }*/

    // сортировка вставками:
    /*
   (function() {
    let oSort= function() {
          let that = {};

        //собственно сама функция сортировки
        that.insertionSort = function(a) {
            let i;
            let j;
            let x;
                iCount = that.getCountOfElements(a);
              for( i=0; i<iCount; i++) {
                x = a[i];
                for( j=i-1; j>=0 && a[j]>x; j-- ) {
                    a[j+1] = a[j];
                }
                a[j+1] = x;
            }
              return a;
        };
          that.getCountOfElements = function(a) {
            let i = 0,
                elem;
            for (elem in a) {
                i++
            }
            return i;
        };

        return that;
      }();
      console.log(oSort.insertionSort([9, 13, 7, 12, 10, 14, 8, 11, 6]));
    //[6, 7, 8, 9, 10, 11, 12, 13, 14]

})();

   */

// Сортировка merge:
/*function mergeSort (unsortedArray) {
    // Нет необходимости сортировать массив, если в массиве только один элемент или он пуст.
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }
    // Чтобы разделить массив пополам, нам нужно выяснить середину
    const middle = Math.floor(unsortedArray.length / 2);

    // делим масив на левый и правый
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    // используем рекурсию для соединения левой и правой части
    return merge(
        mergeSort(left), mergeSort(right)
    );
}*/

// сортировка shell
/*    let shell_sort = function(array){
    let length = array.length;
    let h = 1;
    while( h < length / 3){
        h = 3 * h + 1;
    }

    while( h > 0 ){
        for ( let i = h; i < length; i++){

            for ( let j = i; j > 0 && array[j] < array[j-h]; j-=h){
                array.swap(j, j-h);
            }
        }
           h = --h / 3

    }
    return array;
    };*/

// СОртировка кучи
/*
function heapSort(array) {
       for (let i = Math.floor(array.length / 2); i >= 0; i--) {
        heapify(array, i)
    }

       for(let i = array.length - 1; i > 0; i--){
        swap(array, 0, i);


        heapify(array, 0, i);
    }

    return array;
}
*/
