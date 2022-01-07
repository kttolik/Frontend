function minItFunk(arrMinItem) {
    let minItem = arrMinItem[0]; // Первый элемент принимаем за минимальный.
    for(let i = 0; i < arrMinItem.length; i++) {
        if (arrMinItem[i] < minItem) {
            minItem = arrMinItem[i];
        }
    }
    return (minItem);
}

module.exports = minItFunk;
