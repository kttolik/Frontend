function emptyTriLowLeft() {
    let str = ''
    for (let i = 0; i < 7; i++){
        for (let j = 0; j < 7; j++){
            if (i == 6 || j == 0 || i == j) {
                str = str + '  ' + '*'
            }
            else {
                str = str + '  '+ ' ';
            }
        }
        console.log(str);
        str = '';
    }
}

console.log(emptyTriLowLeft());

module.exports = emptyTriLowLeft;