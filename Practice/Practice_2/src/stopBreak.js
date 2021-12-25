function stopBreak() {
    let result = []
    for ( i = 0; i < 16; i++) { // или i <=15 тоже работает
        for (let j = 0; j < 20; j++) {
            if (i === 15 && j === 15) {
                result = [i, j - 1];
                break;
            }
        }
    }
    return result
}


module.exports = stopBreak;