function numReflection(n) {
    let numberRev = '';
    let number = n.toString().split('');

    for (let i = number.length - 1; i >= 0; i--){
        numberRev = numberRev+ number[i];
    }
    return numberRev;
}

module.exports = numReflection;

