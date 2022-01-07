function maxItFunk(arrMaxItem) {
    let maxItem = arrMaxItem[0]; // Первый элемент принимаем за минимальный.
    for(let i = 0; i < arrMaxItem.length; i++) {
        if (arrMaxItem[i] > maxItem)
        { maxItem = arrMaxItem[i];
        }
    }
    return(maxItem)
}

module.exports = maxItFunk;
