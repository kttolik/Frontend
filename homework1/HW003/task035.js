function showOddItemSum(mass1) {
    let sum = 0;
      for (let i = 0; i < mass1.length; i++) {
        if (i%2 !== 0) {
            sum = sum + mass1[i];
        }
    }
   return sum;
}

module.exports = showOddItemSum;
