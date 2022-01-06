function sumEven(a) {
    let b = 12;
    if (a % 2 == 0) {
        a = a * b;
    } else {
         a = a + b;
    }
     return a;
 }

module.exports = sumEven;

