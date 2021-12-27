function filledSq() {
    let str = '';
    for(let i = 0; i <= 6; i++){
        for(let j = 0; j <= 6; j++) {
            str = str + ' * ';
        }
        str += '\n';
    }
    return str;
}
console.log(filledSq());

module.exports = filledSq;