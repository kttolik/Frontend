// 1.
// const findSum = function(arr, val) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (i !== j && arr[i] + arr[j] === val) {
//                 return true;
//             };
//         };
//     };
//     return false;
// };
//
// 2.
//
//
// const flatten = (array) => array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
//
// let ar1rut = [1, 2, [3, 4, [5]]] ;
// let first = ar1rut.pop();
// console.log(first);
// let second = first.pop();
// console.log(second);
// let ryu = Array.of(ar1rut);
// let zuu = Array.of(first);
// let poo = Array.of(second);
// console.log(ryu + zuu+ poo);
//
// 3.
// export const chunk = (array, size) => {
//     const chunkedArr = [];
//     let index = 0;
//     while (index < array.length) {
//         chunkedArr.push(array.slice(index, size + index));
//         index += size;
//     }
//     return chunkedArr;
// };
// 4.
// function Equal (obj1, obj2){
//
//     if(obj1 === obj2){
//         return true;
//     }
//     else{
//         if(Object.keys(obj1).length != Object.keys(obj2).length){ // Проверка на одинаковое количество свойств
//             return false;
//         }
//         for(let propName in obj1){
//
//             if (! obj2.hasOwnProperty(propName)) { // Есть ли свойства в обоих объектах
//                 return false;
//             }
//             if(obj1[propName].valueOf() !== obj2[propName].valueOf()){ // Одинаковы ли значения свойств
//                 if(! deepEqual(obj1[propName], obj2[propName]) ){ // проверка объекта в объекте
//                     return false;
//                 }
//
//             }
//         }
//     }
//     return true; }
