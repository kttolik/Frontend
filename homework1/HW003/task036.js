function changeArr(arr) {
    for(let i = 0, j = arr.length-1; i < j; i++, j--) {
        let changeItems = arr[i];
        arr[i] = arr[j];
        arr[j] = changeItems;
    }
    return arr;
}

module.exports = changeArr;