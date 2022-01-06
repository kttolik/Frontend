function axiLs(x, y) {
    if (x > 0 && y > 0) {
        return (`first quarter`);
    } else if (x < 0 && y > 0) {
        return (`second quarter`);
    } else if (x < 0 && y < 0) {
        return (`third quarter`);
    } else if (x > 0 && y < 0) {
        return (`fourth quarter`);
    } else {
        return (`Значения не найдены`);
    }
}

module.exports = axiLs
