function positiveNum(i, a, b) {

    if (a > 0 && b > 0 && i > 0) {
        return (a + b + i);
    } else if (a < 0 && b > 0 && i > 0) {
        return (b + i);
    } else if (a > 0 && b < 0 && i > 0) {
        return (a + i);
    } else if (a > 0 && b > 0 && i < 0) {
        return (a + b);
    }  else {
        return ('нет суммы');
    }
}

module.exports = positiveNum;
