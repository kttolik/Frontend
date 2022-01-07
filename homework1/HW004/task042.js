function distBetween(x1, y1, x2, y2)
{
    let answ = ((x2 - x1) ** 2 + (y2 - y1) ** 2 ) ** 0.5;
    return answ;
}
module.exports = distBetween;
