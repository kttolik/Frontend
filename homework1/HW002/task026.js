function sumDigits(numberSum) {
    let sum = 0;
    for( let numSet of `${numberSum}` ){
        sum = sum + (+numSet);
    }
    return sum;
}
module.exports = sumDigits;
