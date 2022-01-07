function showMaxItem(arrMaxItem) {
    let maxItem = arrMaxItem[0];
    let maxItemIndex = 0;

    for(let i = 0; i < arrMaxItem.length; i++) {
        if (arrMaxItem[i] > maxItem)
        { maxItem = arrMaxItem[i];
            maxItemIndex = i;
        }
    }
    return maxItemIndex;
}

module.exports = showMaxItem;