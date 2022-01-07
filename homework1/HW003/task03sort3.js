function insertSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        const someArr = arr[i];
        let j = i;

        while (j > 0 && arr[j - 1] > someArr) {
            arr[j] = arr[j - 1];
            j--;
        }

        arr[j] = someArr;
    }

    return arr;
}

module.exports = insertSort;