function showMinItem(arrMinItem) {
    let minItem = arrMinItem[0];
    let minItemIndex = 0;
    for (let i = 0; i < arrMinItem.length; i++) {
        if (arrMinItem[i] < minItem) {
            minItem = arrMinItem[i];
            minItemIndex = i;
        }
    }
    return minItemIndex;
}

module.exports = showMinItem;