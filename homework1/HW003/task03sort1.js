function bubbleSort (array) {
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
}

module.exports = bubbleSort;
