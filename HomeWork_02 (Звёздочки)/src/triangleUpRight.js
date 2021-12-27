function triangleUpRight() {
    let str = '';
    for(let i = 0; i < 7; i++) {
        for(let j = 0; j < 7; j++) {
            if( i === j || j === 6) {
                str = str + ' * ';
            } else if( i === 0) {
                str = str + ' * ';
            } else {
                str = str + '   ';
            }
        }
        str = str + '\n';
    }
    return str;
}
console.log(triangleUpRight());

module.exports = triangleUpRight;